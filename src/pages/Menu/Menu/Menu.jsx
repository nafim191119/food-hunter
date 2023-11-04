import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import soupsImg from "../../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladsImg from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category == 'offered');
    const salads = menu.filter(item => item.category == 'salad');
    const pizza = menu.filter(item => item.category == 'pizza');
    const soup = menu.filter(item => item.category == 'soup');
    const dessert = menu.filter(item => item.category == 'dessert');
    
    return (
        <div>
            <Helmet>
                <title>Food Hunter | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our menu"></Cover>
            {/* Main Cover */}
            <SectionTitle title="Today's Offer" subtitle="Don't Miss"></SectionTitle>
            {/* Offered items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* Dessert items */}
            <MenuCategory items={dessert} title="Dessert" coverImg={dessertImg}></MenuCategory>
            {/* Soup items */}
            <MenuCategory items={soup} title="Soups" coverImg={soupsImg}></MenuCategory>
            {/* Pizza items */}
            <MenuCategory items={pizza} title="Pizza" coverImg={pizzaImg}></MenuCategory>
            {/* salads items */}
            <MenuCategory items={salads} title="Salads" coverImg={saladsImg}></MenuCategory>
            
        </div>
    );
};

export default Menu;