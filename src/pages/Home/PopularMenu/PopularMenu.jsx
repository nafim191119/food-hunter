import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category == 'popular');
    return (
        <section className='mb-20'>
            <SectionTitle
                subtitle={"Popular Items"}
                title={"From our menu"}
            ></SectionTitle>
            <div className='grid grid-cols-2 gap-8 px-20'>
                {
                    popular.map(item => <MenuItem 
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 font-bold">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;