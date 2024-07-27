import { useState } from "react";
import ProductsCard from "../../Shared/Productscard"
import { Link } from "react-router-dom";

const ShopTab = ({ items }) => {
    // const [search, setSearch] = useState('');
    return (
        <div>
            
            <div  className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-4 mt-16'>
            {
                items.map(item => <ProductsCard key={item._id} item={item}></ProductsCard>)
            }
        </div>
        
        </div>
    )
}

export default ShopTab