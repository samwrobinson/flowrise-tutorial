import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";


const components: JSXMapSerializer = {
  
  heading1: ({children})=>(
    <Heading as="h1" size="xl" className="md:mb- mb-4 mt-12 fist:mt-0 last:mb-0">{children}</Heading>
     ),
     paragraph: ({children}) => (<p className="md:text-2xl font-normal
      md:leading-10 text-teal-50 mb-4 md:mb-8 md:max-w-md">{children}</p>),
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <>

    {slice.variation === "default" && (
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="grid grid-cols-1 place-items-center text-center">

          <PrismicRichText field={slice.primary.heading}
          components={components}/>

          <PrismicRichText field={slice.primary.body}
          components={components}/>

          <Button
          field={slice.primary.button_link} 
          className="mb-8 md:mb-20"
          >
          {slice.primary.button_text}
          </Button>
          <PrismicNextImage field={slice.primary.image}
          className="drop-shadow-xl max-w-4xl w-full"
          />
        </div>

      </Bounded>
      )}

    {slice.variation === "full" && (
        <div className=" flex h-screen w-screen relative"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
            <div className="flex flex-col h-1/2 md:h-4/5 w-1/3 mr-auto ml-auto align-middle justify-center text-left font mb-2.5">
              <PrismicRichText field={slice.primary.heading} components={components} />
              <PrismicRichText field={slice.primary.body} components={components} />
            </div>
            <PrismicNextImage field={slice.primary.image} className="absolute top-0 left-0 h-full w-full object-cover -z-10" />
        </div>
      )}

    {slice.variation === "narrow" && (
        <Bounded className="flex h-2/3 w-screen relative mt-3.5"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
            <div className="flex flex-col h-full w-1/3 mr-auto ml-auto align-middle justify-center text-left font mb-2.5">
              <PrismicRichText field={slice.primary.heading} components={components} />
              <PrismicRichText field={slice.primary.body} components={components} />
              <Button className="h-fit w-fit mb-8 md:mb-20" field={slice.primary.button_link}>
              {slice.primary.button_text}
            </Button>
            </div>
            <PrismicNextImage field={slice.primary.image} className="absolute top-0 left-0 h-full w-full object-cover -z-10" />
        </Bounded>
      )}

    {slice.variation === "horizontal" && (
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="shadow-slate-400 bg-gradient-to-b from-slate-300 to-slate-500"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center mb-10">

          <div className="flex flex-col h-full w-2/3 mr-auto ml-auto align-middle justify-center text-left">
            <PrismicRichText field={slice.primary.heading}
            components={components}/>
            <PrismicRichText field={slice.primary.body}
            components={components}/>
            <Button
            field={slice.primary.button_link}
            className="mb-8 md:mb-20"
            >
            {slice.primary.button_text}
            </Button>
          </div>
          <PrismicNextImage field={slice.primary.image}
          className="drop-shadow-xl shadow-slate-700 max-w-4xl w-full"
          />
        </div>

      </Bounded>
      )}
    </>
  );
};

export default Hero;
