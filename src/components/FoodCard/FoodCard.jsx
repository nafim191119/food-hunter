
const FoodCard = ({item}) => {
    const {name ,image, price, recipe} = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="font-bold text-white bg-slate-900 absolute right-0 mr-4 mt-4 px-2 py-2 rounded">${price}</p>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold text-white">{name}</h2>
                    <div className="divider"></div> 
                    <p className="text-white">{recipe}</p>
                    
                    <div className="card-actions justify-end flex flex-col items-center">
                        <button className="btn btn-outline border-0 border-b-4 font-bold">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;