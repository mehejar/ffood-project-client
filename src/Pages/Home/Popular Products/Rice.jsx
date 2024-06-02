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
import bannerSpices from '../../../assets/bannerCat-13-12.jpg'

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
            <div className='w-full lg:w-4/5 mx-auto mt-4'>
                <img src={bannerSpices} alt="" />
            </div>

            <div>
                <CategoryHeading title={'Rice'}></CategoryHeading>
            </div>


            <div className='w-4/5 mx-auto my-10'>
                <Swiper

                    slidesPerView={4}
                    spaceBetween={30}

                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}

                    // pagination={{
                    //     clickable: true,
                    // }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                            autoplay: {
                                delay: 3500,
                                disableOnInteraction: false,
                            }
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            autoplay: {
                                delay: 3500,
                                disableOnInteraction: false,
                            }
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            autoplay: {
                                delay: 3500,
                                disableOnInteraction: false,
                            }
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                            autoplay: {
                                delay: 3500,
                                disableOnInteraction: false,
                            }
                        },
                    }}
                    navigation={true}

                    modules={[Navigation, Autoplay, Pagination]} className="mySwiper p-5">
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