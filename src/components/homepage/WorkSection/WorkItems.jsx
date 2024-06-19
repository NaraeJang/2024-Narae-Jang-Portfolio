import { HashLink } from 'react-router-hash-link';

// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// REACT ICONS
import { PiGithubLogo } from 'react-icons/pi';
import { MdArrowOutward } from 'react-icons/md';

// DATA
import { projectsData } from '../../../data/newProjectData';
import { useProjectContext } from '../Works';

const WorkItems = () => {
  const { projectsItems } = useProjectContext();

  return (
    <div className="mt-8 list-none p-0 columns-1 md:columns-2 lg:columns-3 2xl:columns-4 gap-5 w-svw mb-20 overflow-hidden  px-[4%]">
      {projectsItems.map(
        ({
          id,
          img,
          imgAlt,
          video = null,
          title,
          livePath,
          internalPath,
          gitLink,
        }) => {
          return (
            <div
              className="relative w-full h-auto p-1 box-border transition-all mb-6 break-inside-avoid-column"
              key={id}>
              <div className="group relative w-full flex gap-4 flex-col items-center">
                <div className="relative w-full overflow-hidden rounded-xl border border-neutral-200 group-hover:border-neutral-400">
                  {video ? (
                    <a href={internalPath} className="cursor-pointer">
                      <video autoPlay muted loop>
                        <source src={video} type="video/mp4" />
                        <img src={img} alt={imgAlt} />
                        Your browser does not support the video tag.
                      </video>
                    </a>
                  ) : img.length < 2 ? (
                    <a href={internalPath}>
                      <img src={img} alt={imgAlt} />
                    </a>
                  ) : (
                    <a href={internalPath} className="cursor-pointer">
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
                        {img.map((item, index) => {
                          return (
                            <SwiperSlide key={`swiper ${index}`}>
                              <img src={item} alt={title + index} />
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </a>
                  )}
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                  <a href={internalPath} className="cursor-pointer">
                    <h5 className="text-neutral-400 font-base leading-tight capitalize group-hover:text-neutral-700 transition-colors">
                      {title}
                    </h5>
                  </a>

                  <div className="flex flex-row justify-end gap-3">
                    <div className="w-6 h-6"></div>
                    {gitLink && (
                      <a
                        href={gitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        tooltip="Visit GitHub"
                        className="cursor-pointer group/github w-6 h-6 relative before:content-[attr(tooltip)] before:invisible before:absolute before:text-xs before:-translate-y-3/4 before:-top-[16px] before:-translate-x-1/2 before:-left-1/2 md:before:translate-x-1/2 md:before:left-1/2 before:bg-black before:py-[0.5625rem] before:px-[1.125rem] before:text-white before:rounded-full before:w-max before:text-center z-20 before:opacity-0 hover:before:visible hover:before:opacity-100 hover:before:-translate-x-1/2 hover:before:-translate-y-full">
                        <PiGithubLogo className="w-full h-full text-neutral-400 group-hover/github:text-neutral-700 transition-colors" />
                      </a>
                    )}
                    {livePath && (
                      <a
                        href={livePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        tooltip="Visit Site"
                        className="cursor-pointer group/site w-6 h-6 relative before:content-[attr(tooltip)] before:invisible before:absolute before:text-xs  before:-translate-y-3/4 before:-top-[16px] before:-translate-x-1/2 before:-left-1/2 md:before:translate-x-1/2 md:before:left-1/2  before:bg-black before:py-[0.5625rem] before:px-[1.125rem] before:text-white before:rounded-full before:w-max before:text-center z-20 before:opacity-0 hover:before:visible hover:before:opacity-100 hover:before:-translate-x-1/2 hover:before:-translate-y-full">
                        <MdArrowOutward className="w-full h-full text-neutral-400 group-hover/site:text-neutral-700 transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
export default WorkItems;
