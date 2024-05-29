import ProductsSlider from "../../Shared/ProductSlider"
import CategorySection from "./Category Section/CategorySection"
import Banner from "./Popular Products/Banner"
import PopularProducts from "./Popular Products/PopularProducts"
import Rice from "./Popular Products/Rice"

const Home = () =>{
    return(
        <div>
            <Banner></Banner>
            <PopularProducts></PopularProducts>
            <CategorySection></CategorySection>
            <Rice></Rice>
            
        </div>
    )
}

export default Home
