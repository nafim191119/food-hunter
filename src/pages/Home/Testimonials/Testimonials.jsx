
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('revies.json')
            .then(item => item.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section>
            <SectionTitle subtitle={"Our Client Say"} title={"Testimonials"}></SectionTitle>
            <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}>
                            <div className='m-24 flex flex-col items-center'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                    className='mx-auto'
                                />
                                <p className='py-8'>{review.details}</p>
                                <h3 className="text-xl text-orange-600">{review.name}</h3>
                            </div>

                        </SwiperSlide>)
                    }
                </Swiper>
            </>
        </section>
    );
};

export default Testimonials;