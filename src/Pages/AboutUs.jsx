import img1 from '../.../../assets/IMG_4572-02.jpg'
import about from '../assets/about us-02.jpg'
import about1 from '../assets/IMG_4572.jpg'
import about2 from '../assets/a6fff1e9-aa3d-4d0f-bfed-14a36b48a0bc-04.jpg'
import './about.css'

const AboutUs = () => {
    return (
        <div className=''>
            <div>
                
                <div className='about-bg'>
                <h2 className='lg:text-7xl py-16 lg:py-24 text-center text-4xl font-bold'>About Us</h2>
                <p className='px-5 font-semibold lg:w-1/2 w-full mx-auto -mt-16 pb-16 py-4'>Sarwar Food Distribution, proudly based in the heart of New York, is your trusted partner in providing premium quality food products. With our Fresh Food brand, we are committed to sourcing and delivering the freshest produce, dairy, and pantry staples to households and businesses alike.</p>
                </div>
                
            </div>
            <div className='flex flex-col p-5 lg:p-0 lg:flex-row gap-5 lg:w-1/2 mx-auto mt-6 lg:mt-20'>

                <div className='lg:w-1/2 w-full'>
                    <h2 className='text-3xl font-bold py-4'>Our <span className='text-green-600'> Mission</span></h2>
                    <p>At Sarwar Food Distribution, home of the Fresh Food brand, our mission is to revolutionize the way New Yorkers access quality nutrition.
                        <br /> <br />
                        We are dedicated to delivering the freshest, highest-quality produce, dairy, and pantry staples directly to your doorstep. Our commitment lies in fostering sustainable practices, supporting local farmers, and ensuring that every community we serve enjoys the taste of wholesome, delicious food. We believe that fresh, nutritious food is a right, not a privilege, and we strive to make it accessible to all, one delivery at a time.</p>
                </div>

                <div className='lg:w-1/2 w-full'>
                    <img src={img1} alt="" />
                </div>

            </div>
            <div className='flex lg:flex-row-reverse flex-col p-5 lg:p-0 gap-12 lg:w-1/2 mx-auto mt-6 lg:mt-20'>

                <div className='lg:w-1/2 w-full'>
                    <h2 className='text-3xl font-bold py-4'>Our <span className='text-green-600'>Vision</span></h2>
                    <p>At Sarwar Food Distribution, our vision is to become the leading force in transforming the food distribution landscape in New York. We envision a community where everyone, regardless of their location or economic status, has access to fresh, healthy, and high-quality food.
                        <br /> <br />
                         Through innovation, sustainable practices, and unwavering dedication to excellence, we aim to set new standards in the industry. Our goal is to create a seamless and efficient food supply chain that not only meets but exceeds the expectations of our customers, fostering a healthier and more vibrant community for generations to come.</p>
                </div>

                <div className='lg:w-1/2 w-full'>
                    <img className='' src={about1} alt="" />
                </div>

            </div>
            <div className='flex lg:flex-row flex-col p-5 lg:p-0 gap-12 my-8 lg:w-1/2 mx-auto mt-6 lg:mt-20'>

                <div className='lg:w-1/2 w-full'>
                    <h2 className='text-3xl font-semibold py-4'>CEO Message</h2>
                    <h2 className='text-xl font-semibold '>G. Mohammad Sarwar (Premel)</h2>
                    <div className='divider text-green-700'></div>
                    <p>Welcome to Sarwar Food Distribution, where our Fresh Food brand stands as a testament to our commitment to quality, sustainability, and community. As CEO, I am proud to lead a team dedicated to revolutionizing the way New Yorkers access and enjoy fresh, nutritious food. 
                        <br /> <br />
                         Our mission goes beyond just delivering groceries; it’s about fostering a healthier, more connected community. We prioritize local farmers, sustainable practices, and unparalleled customer service to ensure that every household we serve experiences the best that our region has to offer. Thank you for trusting us to bring the finest food to your table. Together, we are shaping a future where everyone has access to the nourishment they deserve.</p>
                </div>

                <div className='lg:w-1/2 w-full'>
                    <img className='' src={about2} alt="" />
                </div>

            </div>
        </div>
    )
}

export default AboutUs