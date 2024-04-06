import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";


const components: JSXMapSerializer = {

  heading1: ({children}) => (
    <Heading as="h1" size="lg">{children}</Heading>
  ),

};

/**
 * Props for `Video`.
 */
export type VideoProps = SliceComponentProps<Content.VideoSlice>;

/**
 * Component for "Video" Slices.
 */
const Video = ({ slice }: VideoProps): JSX.Element => {
  return (
    <section className="h-full w-full"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.mission} />

      <video  className="w-full h-full" autoPlay controls preload="none">
        <source src="../../media/tailgate.mov" type="video/quicktime" />
        <track
          src="../../media/tailgate.mov"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
    </video>

    </section>
  );
};

export default Video;
