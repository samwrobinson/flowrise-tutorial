import { Content, isFilled } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
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
          <a data-fslightbox href={item?.data.image.url} key={index}>
              <PrismicNextImage width={200} height={200}
              field={item?.data.image}
              data-src={item?.data.image.id}
              className="shadow-lg shadow-slate-800 rounded-lg transform transition duration-300 ease-in-out hover:scale-105 hover:border-2 hover:border-slate-100"
              imgixParams={{ar: "1:1", fit: "crop"}} />
          </a>
        ))}
      </div>
      <script src=""></script>
    </Bounded>

    
  );
};

export default Gallery;
