// data
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { Clients } from "@/constant";
import { RxQuote } from "react-icons/rx";
import Image from "next/image";
// import { pacifico } from "@/app/layout";
import { pacifico } from "@/lib/fonts";

const TestimonialSlider = () => {
  return (
    <div className="md:max-w-full ">
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        className="md:h-[220px] h-auto"
      >
        {/* Hello Wolr d */}
        {Clients.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="grid md:grid-cols-[20vw_1fr] md:px-10">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex justify-center items-center">
                    <Image
                      src={item.image}
                      alt="Client Image"
                      width={150}
                      height={150}
                      className="md:h-[100px] md:w-[100px] w-[50px] h-[50px] rounded-[50%]"
                    />
                  </div>
                  <div className={pacifico.className + " text-2xl"}>
                    {item.person}
                  </div>
                  <div>{item.postion}</div>
                </div>
                <div
                  className="bg-[rgba(75,47,123,0.15)] 
                rounded-lg px-6 py-8 flex sm:flex-col
                md:gap-x-6 gap-x-3 md:gap-y-3 group cursor-pointer"
                >
                  <div>
                    <div>
                      <RxQuote className="text-5xl text-white" />
                    </div>
                    <div>{item.content}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
