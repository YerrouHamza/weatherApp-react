import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default React.memo(function SliderSwiper({
    spaceBetween,
    slidesPerView,
    className,
    children
}: {
    spaceBetween: number,
    slidesPerView: number,
    className?: string,
    children: React.ReactNode
}) {
  return (
    <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        className={className}
    >
        {React.Children.map(children, (child) => {
            return (
                <SwiperSlide>
                    {child}
                </SwiperSlide>
            )
        })}
    </Swiper>
  )
})
