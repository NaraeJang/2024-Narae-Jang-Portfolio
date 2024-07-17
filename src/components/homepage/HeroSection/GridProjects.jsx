import CalegoDigitalMarketingImg from '../../../assets/newItemThumbs/Ca_Di02.gif';
import GanaAppImg from '../../../assets/newItemThumbs/Gana_app02.webp';
import JobMateImg from '../../../assets/projects-images/jobmate03.webp';

// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const GridProjects = () => {
  return (
    <div className="hidden invisible md:visible md:block md:col-span-5 md:row-span-8 bg-neutral-200 rounded-2xl overflow-hidden">
      <div className="w-full h-full">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
          pagination={{
            type: 'progressbar',
          }}
          style={{
            '--swiper-navigation-size': '1rem',
            '--swiper-navigation-color': '#fefefe',
          }}
          autoplay={{ delay: 3500, pauseOnMouseEnter: true }}
          speed="500"
          loop={true}
          className="mySwiper">
          <SwiperSlide>
            <a href="work/calego-digital-marketing" className="w-full h-full">
              <img
                src={CalegoDigitalMarketingImg}
                alt="Calego Digital Marketing"
                className="object-contain w-full h-full object-center"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="work/bar-ganadara-booking-app" className="w-full h-full">
              <img
                src={GanaAppImg}
                alt="Gana App"
                className="object-contain w-full h-full object-center"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="work/jobmate" className="w-full h-full">
              <img
                src={JobMateImg}
                alt="Jobmate"
                className="object-contain w-full h-full object-center"
              />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default GridProjects;
