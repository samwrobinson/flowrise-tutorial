import Bounded from "@/components/Bounded";
import DarkHeading from "@/components/DarkHeading";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";


const components: JSXMapSerializer = {
  
  heading1: ({children})=>(
    <DarkHeading as="h2" size="lg" className="md:mb- mb-4 mt-12 fist:mt-0 last:mb-0">{children}</DarkHeading>
     ),
     paragraph: ({children}) => (
     <Paragraph className="md:text-2xl font-normal
      md:leading-10 text-teal-50 mb-4 md:mb-8 md:max-w-md">{children}</Paragraph>),
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
    <>

    {slice.variation === "default" && (
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="grid md:grid-cols-2 h-3/4 -z-50 bg-gradient-to-r from-slate-200 to-slate-400"
    >
      <div className="relative w-auto md:border-r-8 border-slate-500 max-w-screen-lg z-10">
        <div className="md:absolute md:left-full md:top-1/2 md:h-0.5 md:w-1/2 md:bg-slate-500"></div>
      </div>

      <div className="py-5 m-10 md:ml-20 z-50">
        <div>
          <PrismicNextImage className="w-full h-full md:w-10/12 md:h-96 md:object-cover rounded-lg shadow-slate-400 shadow-xl transition-all duration-300 ease-in-out hover:translate-y-5" field={slice.primary.event_photo} />
          <PrismicRichText field={slice.primary.heading} components={components} />
          <Paragraph>
            <PrismicRichText field={slice.primary.event_description} />
          </Paragraph>
        </div>
      </div>
    </div>
    )}

{slice.variation === "reverse" && (
  <div
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    className="grid md:grid-cols-2 h-4/5 -z-50 bg-gradient-to-r from-slate-200 to-slate-400"
  >
    <div className="w-auto md:border-r-8 border-slate-500 max-w-screen-lg relative z-10">
      <div className="absolute md:right-0 md:top-1/2 md:h-0.5 md:w-1/2 md:bg-slate-500 overflow-x-hidden -z-10"></div>
        <div className="py-5 m-10 md:ml-20">
          <PrismicNextImage className="w-full h-full md:w-10/12 md:h-96 md:object-cover rounded-lg shadow-slate-400 shadow-xl transition-all duration-300 ease-in-out hover:translate-y-5" field={slice.primary.event_photo} />
          <PrismicRichText field={slice.primary.heading} components={components} />
          <PrismicRichText field={slice.primary.event_description} />
        </div>
    </div>
  </div>
    )}

    {slice.variation === "timelineHeader" && (
  <div
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    className="flex justify-center align-middle w-full h-auto py-5 shadow-lg shadow-slate-400 bg-gradient-to-b from-slate-200 to-slate-300"
  >
    <div className="py-5 m-10 md:ml-20 flex flex-col justify-start">
      <PrismicRichText field={slice.primary.heading} components={components} />
      <PrismicRichText field={slice.primary.event_description} />
    </div>
  </div>
    )}
    </>
  );
};

export default Timeline;

