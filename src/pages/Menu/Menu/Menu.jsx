import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category == 'offered');
    const salads = menu.filter(item => item.category == 'salads');
    const pizza = menu.filter(item => item.category == 'pizza');
    const soup = menu.filter(item => item.category == 'soup');
    const dessert = menu.filter(item => item.category == 'dessert');
    
    return (
        <div>
            <Helmet>
                <title>Food Hunter | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our menu"></Cover>
            <SectionTitle title="Today's Offer" subtitle="Don't Miss"></SectionTitle>

            
        </div>
    );
};

export default Menu;