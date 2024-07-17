// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

//photos
import camping from '../../../assets/downtime/camping1.webp';
import snowboarding from '../../../assets/downtime/snowboarding.webp';
import hiking from '../../../assets/downtime/hiking2.webp';
import scubadiving from '../../../assets/downtime/subadiving.webp';
import drawing from '../../../assets/downtime/drawing1.webp';
import doonge from '../../../assets/downtime/doonge1.webp';
import photography from '../../../assets/downtime/photographing.webp';

const hobbyList = [
  { name: 'camping', image: camping },
  { name: 'snowboarding', image: snowboarding },
  { name: 'hiking', image: hiking },
  { name: 'scuba diving', image: scubadiving },
  { name: 'drawing', image: drawing },
  { name: 'playing with my dog', image: doonge },
  { name: 'photography', image: photography },
];

const GridDownTime = () => {
  return (
    <div className="hidden invisible md:block md:visible md:col-span-5 md:row-span-4 rounded-2xl overflow-hidden">
      <div className="w-full h-full cursor-grab active:cursor-grabbing">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          navigation={false}
          style={{
            '--swiper-navigation-size': '1rem',
            '--swiper-navigation-color': '#fefefe',
          }}
          autoplay={{ delay: 4000, pauseOnMouseEnter: false }}
          speed="500"
          loop={true}
          className="mySwiper2">
          {hobbyList.map((item, index) => {
            const { name, image } = item;

            return (
              <SwiperSlide key={`hobbylist ${index}`}>
                <div className="relative w-full h-full text-left">
                  <div className="absolute top-0 left-0 bg-gradient-to-b from-neutral-950/65 from-20% w-full via-neutral-950/40 via-60%">
                    <p className="p-6 text-neutral-50 font-title text-lg uppercase">
                      In my downTime, I enjoy {name}
                    </p>
                  </div>
                  <img
                    src={image}
                    alt={name}
                    className="object-contain w-full h-full object-center"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
export default GridDownTime;
