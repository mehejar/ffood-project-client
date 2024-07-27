import ProductsSlider from "../../Shared/ProductSlider"
import CategorySection from "./Category Section/CategorySection"
import Banner from "./Popular Products/Banner"
import Bathroom from "./Popular Products/Bathroom"
import Flour from "./Popular Products/Flour"
import PopularProducts from "./Popular Products/PopularProducts"
import Rice from "./Popular Products/Rice"
import Spices from "./Popular Products/Spices"

const Home = () =>{
    return(
        <div>
            <Banner></Banner>
            <PopularProducts></PopularProducts>
            <CategorySection></CategorySection>
            <Rice></Rice>
            <Flour></Flour>
            <Spices></Spices>
            <Bathroom></Bathroom>
            
        </div>
    )
}

export default Home
