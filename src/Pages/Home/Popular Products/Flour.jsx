import ProductsCard from '../../../Shared/Productscard'
import Title from '../../../Shared/Title'
import useProducts from '../../../use Componand/useProducts'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../../Shared/styles.css';
import 'swiper/css/pagination';
import CategoryHeading from '../../../Shared/CategoryHeading';
// import Swiper from 'swiper'

const Flour = () => {

    const [products] = useProducts()
    const flour = products.filter(item => item.category === 'flour')
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
                <CategoryHeading title={'Flour'}></CategoryHeading>
            </div>


            <div className='w-4/5 mx-auto my-10'>
                <Swiper

                    slidesPerView={4}
                    spaceBetween={30}

                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}

                    // pagination={{
                    //     clickable: true,
                    // }}
                    breakpoints={{
                        0:{
                            slidesPerView: 1,
                            spaceBetween: 20,
                            autoplay:{
                                delay: 2000,
                                disableOnInteraction: false,
                            }
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            autoplay:{
                                delay: 2000,
                                disableOnInteraction: false,
                            }
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            autoplay:{
                                delay: 2000,
                                disableOnInteraction: false,
                            }
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                            autoplay:{
                                delay: 2000,
                                disableOnInteraction: false,
                            }
                        },
                    }}
                    navigation={true}
                    
                    modules={[Navigation, Autoplay, Pagination]} className="mySwiper p-5">
                    <div className='grid grid-cols-1'>
                        {
                            flour.map(item => <SwiperSlide><ProductsCard
                                item={item}
                            ></ProductsCard> </SwiperSlide>)
                        }
                    </div>

                </Swiper>
            </div>

        </div>
    )
}

export default Flour