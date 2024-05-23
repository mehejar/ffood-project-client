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

    const rice = products.filter(item => item.category === 'rice')
    const pulses = products.filter(item => item.category === 'pulses')
    const spices = products.filter(item => item.category === 'spices')
    const flour = products.filter(item => item.category === 'flour')
    const oil = products.filter(item => item.category === 'oilGhee')
    const noodleSoup = products.filter(item => item.category === 'noodleSoup')
    const tea = products.filter(item => item.category === 'tea')
    
    const snacks = products.filter(item => item.category === 'snacks')
    const bathroomKitchen = products.filter(item => item.category === 'bathroomKitchen')
    const plasticBag = products.filter(item => item.category === 'plasticBag')
    const nuts = products.filter(item => item.category === 'nuts')
    const biscuits = products.filter(item => item.category === 'biscuits')
    const houshold = products.filter(item => item.category === 'houshold')
    const chips = products.filter(item => item.category === 'chips')

    return (
        <div className='w-4/5 mx-auto my-20'>
            
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Rice</Tab>
                    <Tab>Flour</Tab>
                    <Tab>Pulses</Tab>
                    <Tab>Spices</Tab>
                    <Tab>Oil & Ghee</Tab>
                    <Tab>Noodles & Soup</Tab>
                    <Tab>Tea</Tab>
                    <Tab>Snacks</Tab>
                    <Tab>Snacks</Tab>
                    <Tab>Bathroom & Kitchen</Tab>
                    <Tab>Plastic Bag</Tab>
                    <Tab>Nuts & Dry Fruits</Tab>
                    <Tab>Biscuits</Tab>
                    <Tab>Household</Tab>
                    <Tab>Chips</Tab>
                </TabList>
                <TabPanel>
                    <ShopTab items={rice}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={flour}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={pulses}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={spices}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={oil}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={noodleSoup}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={tea}></ShopTab>
                </TabPanel>
               
                
                <TabPanel>
                    <ShopTab items={snacks}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={bathroomKitchen}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={plasticBag}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={nuts}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={biscuits}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={houshold}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={chips}></ShopTab>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Shop