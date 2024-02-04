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
          spaceBetween={0}
          modules={[Pagination]}
          loop={true}
          className="mySwiper"
        >
          {populer.data.map((populer, index) => (
            <SwiperSlide key={index}>
              <div className="my-10 group relative">
                <Link href={`/anime/${populer.mal_id}`}>
                  <div className="group">
                    <div
                      className="w-[150px] h-[220px] relative tooltip tooltip-bottom"
                      data-tip={populer.title}
                    >
                      <Image
                        src={populer.images.webp.image_url}
                        alt=""
                        width={350}
                        height={350}
                        className="group-hover:scale-125 transition-transform duration-300 group-hover:border-2 border-white rounded-lg"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default TopAnime;
