import { TiArrowLeftOutline, TiArrowRightOutline } from 'react-icons/ti';
import { useState ,useRef} from "react";
import { sliderItems } from "../../data";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination ,Autoplay } from 'swiper/modules';
import './Slider.css'

const Slider = () => {
  
  
  return (
    <div className="slide-container">
  <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}        
        className="mySwiper"
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }} 
      >
        {sliderItems.map((item)=>(        
        <SwiperSlide key={item.id}>
          <img src={item.img} alt="slider image" />
        </SwiperSlide>        
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
