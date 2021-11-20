import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCards } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-cards';

const Card = ({ questions }) => {
    SwiperCore.use([EffectCards]);
    return (
        <Swiper effect={'cards'} grabCursor={true} className="mySwiper">
            {questions.map((el, index) => {
                return (
                    <SwiperSlide>
                        <div
                            className={`flex items-end justify-center h-610 w-300 rounded-lg select-none text-3xl font-semibold text-white bg-black border-2 border-white px-24 pb-66`}
                        >
                            <div className={'w-full'}>
                                <div
                                    style={{ WebkitTextStroke: '0.5px white' }}
                                    className={'text-black font-montserrat'}
                                >
                                    {index < 10 ? '0' + index : index}
                                </div>
                                {el.question}
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Card;
