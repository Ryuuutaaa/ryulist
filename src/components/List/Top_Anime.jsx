"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const TopAnime = ({ populer }) => {
  return (
    <>
      <div className="w-full">
        <Swiper
          slidesPerView={7}
          // grabCursor={true}
          spaceBetween={0}
          modules={[Pagination]}
          loop={true}
          className="mySwiper"
        >
          {populer.data.map((populer, index) => (
            <SwiperSlide key={index}>
              <Link href={`/anime/${populer.mal_id}`}>
                <div>
                  <div className="w-[150px] h-[220px]">
                    <Image
                      src={populer.images.webp.image_url}
                      alt=""
                      width={350}
                      height={350}
                    />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default TopAnime;
