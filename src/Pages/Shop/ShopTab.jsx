import ProductsCard from "../../Shared/Productscard"

const ShopTab = ({items}) =>{
    return(
        <div className='grid grid-cols-4 gap-16 mt-16'>
                    {
                        items.map(item => <ProductsCard key={item._id} item={item}></ProductsCard>)
                    }
                    </div>
    )
}

export default ShopTab