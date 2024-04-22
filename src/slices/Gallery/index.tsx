import { Content, isFilled } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";


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
 * Props for `Gallery`.
 */
export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

/**
 * Component for "Gallery" Slices.
 */


const Gallery = async ({ slice }: GalleryProps): Promise <JSX.Element> => {

  const client = createClient();

  const galleryItems = await Promise.all(
    slice.items.map((item) => {
      if (
        isFilled.contentRelationship(item.gallery_image) && item.gallery_image.uid
      ) {
        return client.getByUID("gallery", item.gallery_image.uid)
      }
    })
  )

  
  Fancybox.bind('[data-fancybox="gallery"]', {
    
    groupAll: true,

    hideScrollbar: false,

    closeButton: true,

    Carousel: {
      Navigation: true,
      transition: "slide",
    },
    Toolbar: {
      display: {
        left: [],
        middle: ["prev", "infobar", "next"],
        right: ["close"]
      }
    },
  });
  

  return (
    
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >  
      <Heading>
        <PrismicRichText components={components} field={slice.primary.heading} />
      </Heading>

      <div className="grid grid-cols-4 grid-flow-row">
        {galleryItems.map((item, index) => (
          <div key={index}>
            <PrismicNextImage width={200} height={200}
            field={item?.data.image}
            data-src={item?.data.image.url}
            className="shadow-lg shadow-slate-800 rounded-lg transform transition duration-300 ease-in-out hover:scale-105 hover:border-2 hover:border-slate-100"
            imgixParams={{ar: "1:1", fit: "crop"}} />
          </div>
        ))}
      </div>

    </Bounded>
  );
};

export default Gallery;
