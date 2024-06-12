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
import { GoLinkExternal } from 'react-icons/go';

// DATA
import { projectsData } from '../../../data/newProjectData';
import { useProjectContext } from '../Works';

const WorkItems = () => {
  const { projectsItems } = useProjectContext();

  return (
    <div className="mt-8 list-none p-0 columns-1 md:columns-2 lg:columns-3 gap-x-6 w-svw mb-60 overflow-hidden  px-[4%]">
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
              className="relative w-full h-auto p-1 box-border transition-all mb-3 break-inside-avoid-column"
              key={id}>
              <div className="relative w-full flex gap-2 flex-col items-center">
                <div className="relative w-full overflow-hidden rounded-xl border border-neutral-200">
                  {video ? (
                    <video autoPlay muted loop>
                      <source src={video} type="video/mp4" />
                      <img src={img} alt={imgAlt} />
                      Your browser does not support the video tag.
                    </video>
                  ) : img.length < 2 ? (
                    <img src={img} alt={imgAlt} />
                  ) : (
                    <Swiper
                      modules={[Autoplay]}
                      navigation={true}
                      pagination={{
                        type: 'progressbar',
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
                  )}
                </div>
                <div className="flex-box-space box-item-start">
                  <div className="flex-element">
                    <h5 className="item-title">{title}</h5>
                  </div>
                  <div className="flex-element-link">
                    {internalPath && (
                      <HashLink to={internalPath} className="btn btn-secondary">
                        Detail
                      </HashLink>
                    )}
                    {livePath && (
                      <a
                        href={livePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="element-link">
                        <span>
                          <GoLinkExternal />
                        </span>
                      </a>
                    )}

                    {gitLink && (
                      <a
                        href={gitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="element-link">
                        <span>
                          <PiGithubLogo />
                        </span>
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
