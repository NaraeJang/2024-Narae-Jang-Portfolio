// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

//Slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//photos
// import camping from '../../../assets/downtime/';
// import snowboarding from '../../../assets/downtime/';
// import hiking from '../../../assets/downtime/';
// import scubadiving from '../../../assets/downtime/';
// import drawing from '../../../assets/downtime/';
// import doonge from '../../../assets/downtime/';
// import photographing from '../../../assets/downtime/';

const GridDownTime = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div className="hidden invisible md:block md:visible md:col-span-5 md:row-span-4 rounded-2xl overflow-hidden">
      <div className="w-full h-full">
        <Slider {...settings}>
          <div className="relative w-full h-full text-left">
            <div className="absolute top-4 left-4 bg-black">
              <p className="text-white font-title text-lg">
                In My DownTime, I enjoy camping.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default GridDownTime;

// <Swiper
//   modules={[Navigation, Autoplay, EffectFade]}
//   effect="fade"
//   fadeEffect={{ crossFade: true }}
//   navigation={false}
//   style={{
//     '--swiper-navigation-size': '1rem',
//     '--swiper-navigation-color': '#fefefe',
//   }}
//   autoplay={{ delay: 1000, pauseOnMouseEnter: true }}
//   speed="1000"
//   loop={true}
//   className="mySwiper">
//   <SwiperSlide>
//     {({ isActive }) => (
//       <div className="bg-blue-500 w-full h-full text-white text-left">
//         <p>In My DownTime, I enjoy {isActive ? 'camping' : 'not active'}</p>
//       </div>
//     )}
//   </SwiperSlide>
//   <SwiperSlide>
//     {({ isActive }) => (
//       <div className="bg-yellow-500 w-full h-full text-white text-left">
//         <p>In My DownTime, I enjoy {isActive ? 'hiking' : 'not active'}</p>
//       </div>
//     )}
//   </SwiperSlide>
//   <SwiperSlide>
//     {({ isActive }) => (
//       <div className="bg-red-500 w-full h-full text-white text-left">
//         <p>In My DownTime, I enjoy {isActive ? 'drawing' : 'not active'}</p>
//       </div>
//     )}
//   </SwiperSlide>
// </Swiper>;
