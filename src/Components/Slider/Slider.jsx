// import Swiper core and required modules
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Slider.css"

export default function Slider({ Data }) {
  return (
    <Swiper
      className="w-full h-96 bg-green-500 "
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {Data.slice(0, 4).map((data) => (
        <SwiperSlide key={data._id}>
          <div className="text-orange-500">
            <Link to="/">
              <img  className="object-cover  w-full h-full "
                src={`http://localhost:4000/courses/covers/${data.cover}`}
              />
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
