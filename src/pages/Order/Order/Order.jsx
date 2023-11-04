import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import orderCover from '../../../assets/shop/order.jpg'
import Cover from '../../Shared/Cover/Cover';
import { useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const drinks = menu.filter(item => item.category == 'drinks');
    const salads = menu.filter(item => item.category == 'salad');
    const pizza = menu.filter(item => item.category == 'pizza');
    const soup = menu.filter(item => item.category == 'soup');
    const dessert = menu.filter(item => item.category == 'dessert');

    return (
        <div>
            <Helmet>
                <title>Food Hunter | Order</title>
            </Helmet>
            <Cover img={orderCover} title="Order Food"></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className='text-center'>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                </div>
                <TabPanel>
                    <OrderTab items={salads}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default Order;