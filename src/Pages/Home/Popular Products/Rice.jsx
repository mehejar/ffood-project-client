import ProductsCard from '../../../Shared/Productscard'
import Title from '../../../Shared/Title'
import useProducts from '../../../use Componand/useProducts'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../../Shared/styles.css';
import 'swiper/css/pagination';
// import Swiper from 'swiper'

const Rice = () => {

    const [products] = useProducts()
    const rice = products.filter(item => item.category === 'rice')
    // const popularMenu = menu.filter(item => item.category === 'popular')
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll:
            1
    }

    return (
        <div>
          

            <div>
                <Title
                    title={'Popular Products'}
                    subTitle={'You can choose from our best for your family'}
                ></Title>
            </div>

           
            <div className='w-4/5 mx-auto my-10'>
                <Swiper
                    
                    pagination={{
                        clickable: true,
                    }} 
                    breakpoints={{
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 5,
                          spaceBetween: 50,
                        },}}
                    navigation={true} 
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false
                    }}
                    modules={[Navigation]} className="mySwiper p-5">
                    <div className='grid grid-cols-1'>
                    {
                        rice.map(item => <SwiperSlide><ProductsCard
                           item={item}
                        ></ProductsCard> </SwiperSlide>)
                    }
                    </div>

                </Swiper>
            </div>

        </div>
    )
}

export default Rice