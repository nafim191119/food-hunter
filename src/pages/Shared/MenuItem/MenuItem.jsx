
const MenuItem = ({item}) => {
    const {name ,image, price, recipe} = item;
    return (
        <div className="flex space-x-4 items-center">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase font-bold">{name} ----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600 font-bold">${price}</p>
        </div>
    );
};

export default MenuItem;