// data
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { serviceData, workSlides } from "@/constant";
import { RxArrowRight, RxArrowTopRight } from "react-icons/rx";
import "swiper/css";
import { SlideType, WorkImage } from "@/comon.types";
import Image from "next/image";
import Link from "next/link";

const WorkSilder = () => {
  // return <>Hello </>;
  return (
    <div className="md:max-w-[40vw]">
      <Swiper
        slidesPerView={1}
        freeMode={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="h-[260px] sm:h-[400px]"
      >
        {/* Hello Wolr d */}
        {workSlides.slides.map((slide: SlideType, index) => {
          return (
            <SwiperSlide key={index + Math.random().toString()}>
              <div className="grid grid-cols-2 grid-rows-2 gap-3">
                {slide.images.map((el: WorkImage, index) => {
                  return (
                    <div
                      key={index}
                      className="cursor-pointer z-10 group rounded-lg relative"
                    >
                      <Link target="_blank" href={el.url ?? el.path}>
                        <div
                          className="
                          absolute 
                          opacity-0
                           group-hover:opacity-80 w-full h-full
                        gap-1 justify-center items-center
                        bg-gradient-to-l
                        flex 
                        from-transparent via-[#e838cc] to-[#4a22bd] transition-all duration-300"
                        >
                          <div
                            className="
                          transition-all duration-400
                          absolute group-hover:translate-x-0 translate-x-[20px] text-xl items-center gap-2"
                          >
                            Live Preview
                          </div>
                          <span
                            className="
                            text-2xl font-bold
                          transition-all duration-500
                          absolute group-hover:translate-x-[72px] translate-x-[20px]  items-center gap-2"
                          >
                            <RxArrowRight />
                          </span>
                        </div>
                      </Link>
                      <div className="image_container md:h-[180px] h-[100px] overflow-hidden w-full">
                        <Image
                          src={el.path}
                          alt="Project Image"
                          height={200}
                          width={200}
                          className="w-full conver h-full  rounded-md"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default WorkSilder;
