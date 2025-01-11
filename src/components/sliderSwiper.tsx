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
        {React.Children.map(children, (child, index) => {
            const rendomKeyId = Math.floor(Math.random() * 1000 + (index + 1));
            return (
                <SwiperSlide key={rendomKeyId}>
                    {child}
                </SwiperSlide>
            )
        })}
    </Swiper>
  )
})
