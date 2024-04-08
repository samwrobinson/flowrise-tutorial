import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";


const components: JSXMapSerializer = {
  heading2: ({children}) => (
    <Heading as="h2" size="lg" className="md:mb- mb-4 mt-12 fist:mt-0 last:mb-0">{children}</Heading>
  ),
  paragraph: ({children}) => (
    <p className="md:text-2xl font-normal
    md:leading-10 text-teal-50 mb-4 md:mb-8 md:max-w-md">{children}</p>
  )
};

/**
 * Props for `Timeline`.
 */
export type TimelineProps = SliceComponentProps<Content.TimelineSlice>;

/**
 * Component for "Timeline" Slices.
 */
const Timeline = ({ slice }: TimelineProps): JSX.Element => {
  return (
    <div className="grid md:grid-cols-2 w-full h-full md:h-1/2"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="relative w-full h-full md:border-r-8 border-slate-500 max-w-screen-lg">
      <div className="md:absolute md:left-full md:top-1/2 md:h-0.5 md:w-1/2 md:bg-slate-500 md:-z-40"></div>
      </div>

      <div className="m-10 md:m-28">
      
        <div className="z-50">
          <PrismicNextImage className="w-full h-1/2 object-cover rounded-lg shadow-xl" field={slice.primary.event_photo} />
          <>{slice.primary.event_title}</>
          <PrismicRichText field={slice.primary.event_description} />
        </div>
      </div>
    </div>
  );
};

export default Timeline;

