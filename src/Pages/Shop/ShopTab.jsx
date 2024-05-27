import { useState } from "react";
import ProductsCard from "../../Shared/Productscard"
import { Link } from "react-router-dom";

const ShopTab = ({ items }) => {
    const [search, setSearch] = useState('');
    return (
        <div>
            <input onChange={(e) => setSearch(e.target.value)}
              placeholder='Search contacts' type="search" />
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-16 mt-16'>
            {
                items.map(item => <ProductsCard key={item._id} item={item}></ProductsCard>)
            }
        </div>
        
        </div>
    )
}

export default ShopTab