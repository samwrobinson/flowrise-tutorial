import { Content, isFilled } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

import { createClient } from "@/prismicio";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading
      as="h2"
      size="md"
      className=""
      >
        {children}
      </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="test-base font-medium font-body text-slate-600 sm:text-left text-center">
      {children}
    </p>
  )
};

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = async ({
  slice,
}: TestimonialsProps): Promise<JSX.Element> => {

  const client = createClient();

  const testimonials = await Promise.all(
    slice.items.map((item) => {
      if (
        isFilled.contentRelationship(item.testimonial) && item.testimonial.uid
      ) {
        return client.getByUID("testimonial", item.testimonial.uid);
      }
    })
  );
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText components={components} field={slice.primary.heading} />

      <div>
        {testimonials.map(
          (item, index) =>
            item && (
          <div key={index}>
          <PrismicRichText field={item.data.quote} components={components}/>
        </div>
      ))}
    </div>

    </Bounded>
  );
};

export default Testimonials;
