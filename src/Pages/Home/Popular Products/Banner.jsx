import { Swiper, SwiperSlide } from 'swiper/react';
import bannerp from '../../../assets/banner-01.png'
import bannerbg from '../../../assets/banner bg-02.jpg'
import toptext from '../../../assets/topofbanner-03-03.png'
import './banner.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../../Shared/styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () =>{
    return(
        <div className=" bg-banner">
          <div className='flex pt-8 w-2/3 lg:w-1/2 mx-auto justify-center'>
          <img className='' src={toptext} alt="" />
          </div>
           <img className='mx-auto lg:w-[900px]' src={bannerp} alt="" />
          
        </div>
    )
}

export default Banner