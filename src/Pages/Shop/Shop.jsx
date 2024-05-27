// import { Tab, Tabs } from "react-tabs"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ShopTab from './ShopTab';
import useProducts from '../../use Componand/useProducts';


const Shop = () => {
    const categories = ['allCategory', 'rice', 'flour', 'pulses', 'spices', 'oil', 'noodleSoup', 'tea', 'snacks', 'bathroomKitchen', 'plasticBag', 'nuts', 'biscuits', 'houshold', 'chips']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(0)
    const [search, setSearch] = useState('');

    const [products] = useProducts()
    console.log(category)

    const allCategory = products.filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item.name.toLowerCase().includes(search);
            // : item.first_name.toLowerCase().includes(search);
    })

    const rice = products.filter(item => item.category === 'rice').filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item.name.toLowerCase().includes(search);
            // : item.first_name.toLowerCase().includes(search);
    })
    const pulses = products.filter(item => item.category === 'pulses').filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item.name.toLowerCase().includes(search);
            // : item.first_name.toLowerCase().includes(search);
    })
    const spices = products.filter(item => item.category === 'spices').filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item.name.toLowerCase().includes(search);
            // : item.first_name.toLowerCase().includes(search);
    })
    const flour = products.filter(item => item.category === 'flour').filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item.name.toLowerCase().includes(search);
            // : item.first_name.toLowerCase().includes(search);
    })
    const oil = products.filter(item => item.category === 'oilGhee').filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item.name.toLowerCase().includes(search);
            // : item.first_name.toLowerCase().includes(search);
    })
    const noodleSoup = products.filter(item => item.category === 'noodleSoup')
    const tea = products.filter(item => item.category === 'tea').filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item.name.toLowerCase().includes(search);
            // : item.first_name.toLowerCase().includes(search);
    })

    const snacks = products.filter(item => item.category === 'snacks').filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item.name.toLowerCase().includes(search);
            // : item.first_name.toLowerCase().includes(search);
    })
    const bathroomKitchen = products.filter(item => item.category === 'bathroomKitchen').filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item.name.toLowerCase().includes(search);
            // : item.first_name.toLowerCase().includes(search);
    })
    const plasticBag = products.filter(item => item.category === 'plasticBag').filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item.name.toLowerCase().includes(search);
            // : item.first_name.toLowerCase().includes(search);
    })
    const nuts = products.filter(item => item.category === 'nuts').filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item.name.toLowerCase().includes(search);
            // : item.first_name.toLowerCase().includes(search);
    })
    const biscuits = products.filter(item => item.category === 'biscuits').filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item.name.toLowerCase().includes(search);
            // : item.first_name.toLowerCase().includes(search);
    })
    const houshold = products.filter(item => item.category === 'houshold').filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item.name.toLowerCase().includes(search);
            // : item.first_name.toLowerCase().includes(search);
    })
    const chips = products.filter(item => item.category === 'chips').filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item.name.toLowerCase().includes(search);
            // : item.first_name.toLowerCase().includes(search);
    })

    return (
        <div className='w-4/5 mx-auto my-20'>

           <div className='my-8'>
           <input className=" p-3 border-2 rounded-md mx-auto w-full max-w-3xl" onChange={(e) => setSearch(e.target.value)}
                placeholder='Search contacts' type="search" />
           </div>


            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>All Category</Tab>
                    <Tab>Rice</Tab>
                    <Tab>Flour</Tab>
                    <Tab>Pulses</Tab>
                    <Tab>Spices</Tab>
                    <Tab>Oil & Ghee</Tab>
                    <Tab>Noodles & Soup</Tab>
                    <Tab>Tea</Tab>
                    <Tab>Snacks</Tab>
                    <Tab>Bathroom & Kitchen</Tab>
                    <Tab>Plastic Bag</Tab>
                    <Tab>Nuts & Dry Fruits</Tab>
                    <Tab>Biscuits</Tab>
                    <Tab>Household</Tab>
                    <Tab>Chips</Tab>
                </TabList>
                <TabPanel>
                    <ShopTab items={allCategory}></ShopTab>
                </TabPanel>
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