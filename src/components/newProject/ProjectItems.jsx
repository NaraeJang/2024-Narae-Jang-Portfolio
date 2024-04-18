import { HashLink } from 'react-router-hash-link';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// react icons
import { PiGithubLogo } from 'react-icons/pi';
import { GoLinkExternal } from 'react-icons/go';
// data
import { projectsData } from '../../data/newProjectData';
import { useProjectContext } from './NewProjects';

const ProjectItems = () => {
  const { projectsItems } = useProjectContext();

  return (
    <div className="product-box">
      {projectsItems.map(
        ({
          id,
          category,
          img,
          imgAlt,
          title,
          keyword,
          livePath,
          internalPath,
          gitLink,
        }) => {
          return (
            <div className="product-div" key={id}>
              <div className="image-with-text">
                <div className="img-container">
                  {img.length < 2 ? (
                    <img src={img} alt={imgAlt} />
                  ) : (
                    <Swiper
                      modules={[Pagination, Navigation, Autoplay]}
                      navigation={true}
                      pagination={{
                        type: 'progressbar',
                      }}
                      style={{
                        '--swiper-pagination-color': '#4e3de8',
                        '--swiper-pagination-bullet-inactive-color': '#fff',
                        '--swiper-pagination-bullet-inactive-opacity': '.6',
                        '--swiper-navigation-size': '1rem',
                        '--swiper-navigation-color': '#4e3de8',
                      }}
                      autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
                      speed="500"
                      loop={true}
                      className="mySwiper">
                      {img.map((item, index) => {
                        return (
                          <SwiperSlide key={title + index}>
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
                    <p className="description">{keyword}</p>
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
export default ProjectItems;

//  <div className="product-div">
//    <div className="image-with-text">
//      <div className="img-container">
//        <img src={GanaBC} alt="GanaBC" />
//      </div>
//      <div className="flex-box-space box-item-start">
//        <div className="flex-element">
//          <h5 className="item-title">Bar Ganadara Business Card</h5>
//          <p className="description">marketing | publication</p>
//        </div>
//        <div className="flex-element-link"></div>
//      </div>
//    </div>
//  </div>;

//   <div className="product-div">
//         <div className="image-with-text">
//           <div className="img-container">
//             <Swiper
//               modules={[Pagination, Navigation, Autoplay]}
//               navigation={true}
//               pagination={{
//                 type: 'progressbar',
//               }}
//               style={{
//                 '--swiper-pagination-color': '#4e3de8',
//                 '--swiper-pagination-bullet-inactive-color': '#fff',
//                 '--swiper-pagination-bullet-inactive-opacity': '.6',
//                 '--swiper-navigation-size': '1rem',
//                 '--swiper-navigation-color': '#4e3de8',
//               }}
//               autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
//               speed="500"
//               loop={true}
//               className="mySwiper">
//               <SwiperSlide>
//                 <img src={GanaMenu01} alt="GanaMenu01" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img src={GanaMenu02} alt="GanaMenu02" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img src={GanaMenu03} alt="GanaMenu03" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img src={GanaMenu04} alt="GanaMenu04" />
//               </SwiperSlide>
//             </Swiper>
//           </div>
//           <div className="flex-box-space box-item-start">
//             <div className="flex-element">
//               <h5 className="item-title">Korean Retro Style Menu</h5>
//               <p className="description">marketing | publication</p>
//             </div>
//             <div className="flex-element-link">
//               <HashLink to="#" className="btn btn-secondary">
//                 Detail
//               </HashLink>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="product-div">
//         <div className="image-with-text">
//           <div className="img-container">
//             <img src={Jobmate} alt="Jobmate" />
//           </div>
//           <div className="flex-box-space box-item-start">
//             <div className="flex-element">
//               <h5 className="item-title">Job Tracking Web Application</h5>
//               <p className="description">React | Express | MongoDB</p>
//             </div>
//             <div className="flex-element-link">
//               <a
//                 href="#"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="element-link">
//                 <span>
//                   <GoLinkExternal />
//                 </span>
//               </a>
//               <a
//                 href="#"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="element-link">
//                 <span>
//                   <PiGithubLogo />
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
