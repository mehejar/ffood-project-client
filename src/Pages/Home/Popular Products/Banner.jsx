import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../../../assets/bannert-08.jpg'
import banner2 from '../../../assets/bannert-09.jpg'
import banner3 from '../../../assets/bannert-10.jpg'
import banner4 from '../../../assets/bannert-11.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../../Shared/styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () =>{
    return(
        <div>
           
            <Swiper
        spaceBetween={0}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
         
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner4} alt="" /></SwiperSlide>
        
      </Swiper>
        </div>
    )
}

export default Banner