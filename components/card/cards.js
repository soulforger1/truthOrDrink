import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCards } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';

export const Cards = ({ questions }) => {
    SwiperCore.use([EffectCards]);
    return (
        <Swiper effect={'cards'} grabCursor={true} className="mySwiper" style={{ position: "fixed" }}>
            {questions.map((cur, index) => (
                <SwiperSlide key={`card-${index}`}>
                    <div
                        className={`flex items-end justify-center h-610 w-300 rounded-lg select-none text-3xl text-white bg-black border-2 border-white px-24 pb-66`}
                    >
                        <div className={'w-full font-montserrat'}>
                            <div
                                style={{ WebkitTextStroke: '0.5px white' }}
                                className={'text-black font-montserrat'}
                            >
                                {index < 10 ? '0' + index : index}
                            </div>
                            {cur.question}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
