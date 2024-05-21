import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import { FreeMode } from 'swiper'
import 'swiper/css/free-mode';
// import 'swiper/css/pagination';
const ProductsSlider = () =>{
    return(
        <div>
            <Swiper
            freeMode={true}
        slidesPerView={4}
        spaceBetween={30}
        
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>Slide1</SwiperSlide>
        <SwiperSlide>Slide1</SwiperSlide>
        <SwiperSlide>Slide1</SwiperSlide>
        <SwiperSlide>Slide1</SwiperSlide>
        <SwiperSlide>Slide1</SwiperSlide>
      </Swiper>
        </div>
    )
}

export default ProductsSlider