import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div>
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className='grid grid-cols-2 gap-8 px-20 mb-20 py-12'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;