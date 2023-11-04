import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div className="mb-20">
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className='grid grid-cols-2 gap-8 px-20 py-12'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`} className="btn btn-outline border-0 border-b-4 font-bold">Order Now</Link>
        </div>
    );
};

export default MenuCategory;