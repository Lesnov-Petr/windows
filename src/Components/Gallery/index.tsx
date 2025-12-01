import { SGallery, SImage } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Gallery: React.FC = () => {
  const images = [
    {
      src: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_659d320e9c148f78a1f7f721_659f9c618bb8f557a96c6e06/scale_1200",
      alt: "Image 1",
    },
    {
      src: "https://img.freepik.com/free-photo/adorable-looking-kitten-with-sunglasses_23-2150886404.jpg?semt=ais_hybrid&w=740",
      alt: "Image 1",
    },
    {
      src: "https://avatars.mds.yandex.net/i?id=92983e0895b3762f84daebe70b1b8478a122dd5a-5499519-images-thumbs&n=13",
      alt: "Image 1",
    },
    {
      src: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_659d320e9c148f78a1f7f721_659f9c618bb8f557a96c6e06/scale_1200",
      alt: "Image 1",
    },
    {
      src: "https://img.joomcdn.net/b0f4c8274496328c4c8b7ad7e317a1812b08e7a6_original.jpeg",
      alt: "Image 1",
    },
    {
      src: "https://avatars.mds.yandex.net/i?id=92983e0895b3762f84daebe70b1b8478a122dd5a-5499519-images-thumbs&n=13",
      alt: "Image 1",
    },
    {
      src: "https://avatars.mds.yandex.net/i?id=92983e0895b3762f84daebe70b1b8478a122dd5a-5499519-images-thumbs&n=13",
      alt: "Image 1",
    },
  ];
  return (
    <SGallery>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={"auto"}
        centeredSlides={true}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        initialSlide={Math.floor(images.length / 2)}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 3, // нечетное число для лучшего центрирования
            spaceBetween: 80,
            centeredSlides: true,
          },
        }}
      >
        {images.map((image) => (
          <SwiperSlide>
            <SImage src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SGallery>
  );
};
