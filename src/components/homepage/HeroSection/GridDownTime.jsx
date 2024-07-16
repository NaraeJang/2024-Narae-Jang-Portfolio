// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';

const GridDownTime = () => {
  return (
    <div className="hidden invisible md:block md:visible md:col-span-5 md:row-span-4 rounded-2xl overflow-hidden">
      <div className="w-full h-full">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          navigation={false}
          pagination={{
            type: 'progressbar',
          }}
          style={{
            '--swiper-navigation-size': '1rem',
            '--swiper-navigation-color': '#fefefe',
          }}
          autoplay={{ delay: 2500, pauseOnMouseEnter: true }}
          speed="500"
          loop={true}
          className="mySwiper2">
          <SwiperSlide>
            {({ isActive }) => (
              <div className="bg-blue-500 w-full h-full text-white">
                In My DownTime, I enjoy {isActive ? 'camping' : 'not active'}
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div className="bg-yellow-500 w-full h-full text-white">
                In My DownTime, I enjoy {isActive ? 'hiking' : 'not active'}
              </div>
            )}
          </SwiperSlide>{' '}
          <SwiperSlide>
            {({ isActive }) => (
              <div className="bg-red-500 w-full h-full text-white">
                In My DownTime, I enjoy {isActive ? 'drawing' : 'not active'}
              </div>
            )}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default GridDownTime;
