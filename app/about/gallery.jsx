"use client";
import Image from "next/image";

const galleryData = {
  galleryImage: [
    { image: "/img/features/gallery-1.jpg" },
    { image: "/img/features/gallery-2.jpg" },
    { image: "/img/features/gallery-3.jpg" },
    { image: "/img/features/gallery-4.jpg" },
  ],
};

const { galleryImage } = galleryData;

const Gallery = () => {
  return (
    <>
      <div className="gallery__area section-padding pb-0 overflow-hidden">
        <div className="container-fluid p-0">
          <div className="row">
            {galleryImage.map((item, index) => (
              <div key={index} className="col-sm-3 sm-mb-10">
                <div className="gallery__area-item">
                  <Image className="w-100" src={item.image} alt="image" width={1000} height={1000}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
