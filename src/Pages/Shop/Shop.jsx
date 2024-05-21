// import { Tab, Tabs } from "react-tabs"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ShopTab from './ShopTab';
import useProducts from '../../use Componand/useProducts';


const Shop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
  
    const [products] = useProducts()
    console.log(category)

    const rice = products.filter(item => item.category === 'Rice')
    const pulses = products.filter(item => item.category === 'Pulses')
    const spices = products.filter(item => item.category === 'Spices')
    const flour = products.filter(item => item.category === 'Flour')
    const oil = products.filter(item => item.category === 'Oil & Ghee')

    return (
        <div className='w-4/5 mx-auto my-20'>
            
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <ShopTab items={rice}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={pulses}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={spices}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={flour}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={oil}></ShopTab>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Shop