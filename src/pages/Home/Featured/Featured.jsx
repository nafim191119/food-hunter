import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <div className="mb-24 featured-item px-8 py-2 text-white bg-fixed">
            <SectionTitle subtitle={"Check it out"} title={"Featured Items"}></SectionTitle>

            <div className="md:flex justify-center items-center py-12 px-16 bg-slate-700 bg-opacity-80 rounded">
                <div>
                    <img height={300} width={1000} src={featuredImg} alt="" />
                </div>
                <div className="md:ml-8 text-xl">
                    <p className="font-bold">2 Aug 2029</p>
                    <p className="uppercase font-bold">Where can i get some?</p>
                    <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate molestiae et atque nemo. Consectetur incidunt vitae quas deleniti nostrum corrupti dolor natus illum sit voluptatibus!</p>
                    <button className="btn btn-outline border-0 border-b-4 font-bold">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;