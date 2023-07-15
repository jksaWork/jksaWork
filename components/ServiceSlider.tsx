// data
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { serviceData } from "@/constant";
import { RxArrowTopRight } from "react-icons/rx";
import "swiper/css";

const ServiceSlider = () => {
  // return <>Hello </>;
  return (
    <div className="md:max-w-[50vw]">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination, Navigation]}
        className="h-[240px] sm:h-[340px]"
      >
        {/* Hello Wolr d */}
        {serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="bg-[rgba(75,47,123,0.15)] 
                rounded-lg px-6 py-8 flex sm:flex-col
                md:gap-x-6 gap-x-3 md:gap-y-3 group cursor-pointer"
              >
                <div className="text-4xl text-accent">{item.icon}</div>
                <div>
                  <div className="text-2xl mb-2 font-[500]">{item.title}</div>
                  <div>{item.description}</div>
                </div>
                <div>
                  <RxArrowTopRight
                    className="text-2xl group-hover:rotate-45 transition-all duration-500
                group-hover:text-accent
                "
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;
