import ProductsCard from "../../Shared/Productscard"

const ShopTab = ({items}) =>{
    return(
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-16 mt-16'>
                    {
                        items.map(item => <ProductsCard key={item._id} item={item}></ProductsCard>)
                    }
                    </div>
    )
}

export default ShopTab