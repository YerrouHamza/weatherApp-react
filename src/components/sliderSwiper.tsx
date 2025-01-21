import React, { forwardRef, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { cn } from "../lib/utils";
import {IconChevronCompactLeft, IconChevronCompactRight } from '@tabler/icons-react'

export default React.memo(function SliderSwiper({
    spaceBetween,
    slidesPerView,
    navigation = true,
    className,
    children,
}: {
    spaceBetween: number;
    slidesPerView: number;
    navigation?: boolean;
    className?: string;
    children: React.ReactNode;
}) {
  const swiperInstanceRef = useRef<SwiperType | null>(null);
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="relative flex px-3">
        <Swiper
            modules={[Navigation]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            className={className}
            onBeforeInit={(swiper) => {
                swiperInstanceRef.current = swiper;

                if (swiper.params.navigation) {
                const navigation = swiper.params.navigation as any;
                navigation.prevEl = prevButtonRef.current;
                navigation.nextEl = nextButtonRef.current;
                }
            }}
        >
        {React.Children.map(children, (child, index) => {
            const randomKeyId = Math.floor(Math.random() * 1000 + (index + 1));
            return <SwiperSlide key={randomKeyId}>{child}</SwiperSlide>;
        })}
        </Swiper>

        {navigation && <>
            <SwiperButton type="prev" ref={prevButtonRef} />
            <SwiperButton type="next" ref={nextButtonRef} />
        </>}
    </div>
  );
});

const SwiperButton = forwardRef<HTMLButtonElement, { type: "prev" | "next" }>(({ type }, ref) => {
    const buttonStyle = "absolute top-1/2 transform -translate-y-1/2 z-10 text-gray-500 opacity-85";

    if (type === "prev") {
      return (
        <button ref={ref} className={cn(buttonStyle, '-left-4')}>
            <IconChevronCompactLeft size={34}/>
        </button>
      );
    }

    return (
      <button ref={ref} className={cn(buttonStyle, '-right-4')}>
        <IconChevronCompactRight size={34}/>
      </button>
    );
  }
);

SwiperButton.displayName = "SwiperButton";
