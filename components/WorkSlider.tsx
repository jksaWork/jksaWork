// data
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
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
        modules={[FreeMode, Pagination]}
        className="h-[240px] sm:h-[340px]"
      >
        {/* Hello Wolr d */}
        {workSlides.slides.map((slide: SlideType, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 grid-rows-2 gap-3">
                {slide.images.map((el: WorkImage) => {
                  return (
                    <div className="cursor-pointer z-10 group rounded-lg relative">
                      <Link
                        target="_blank"
                        href={el.url ? el.url : "http://localhost:213"}
                      >
                        <div
                          className="absolute hidden group-hover:flex w-full h-full
                        gap-1 justify-center items-center
                        bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] transition-all duration-1000"
                        >
                          <div className="flex text-xl items-center gap-2">
                            Live Preview
                            <span className="text-2xl">
                              <RxArrowRight />
                            </span>
                          </div>
                        </div>
                      </Link>

                      <Image
                        src={el.path}
                        alt="Project Image"
                        height={200}
                        width={200}
                        className="w-full conver rounded-md"
                      />
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
