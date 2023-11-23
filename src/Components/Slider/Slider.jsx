// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider(){

  return (
    
    <Swiper
      className='w-full h-screen'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src='1.jpg' className='w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src='2.jpg' className='w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src='3.jpg' className='w-full h-full'/></SwiperSlide>
      <SwiperSlide><img src='4.jpg' className='w-full h-full'/></SwiperSlide>
{/*       
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <Link to={item.link}>
            {item.title}
          </Link>
        </SwiperSlide>
      ))} */}


    </Swiper>
    
  );
};