
const SectionTitle = ({title, subtitle}) => {
    return (
        <div className="md:w-6/12 mx-auto text-center my-12">
            <p className="text-yellow-600 text-xl mb-4 font-bold">--- {subtitle} ---</p>
            <h3 className="text-5xl uppercase font-bold border-y-2 py-4">{title}</h3>
        </div>
    );
};

export default SectionTitle;