import GabrielTitleText from './GabrielTitleText';
import AudiQ7video from '../../../assets/gabriel/AudiQ7.mp4';
import Audivideo from '../../../assets/gabriel/AudiGabrielVideo.mp4';
import PorschePrestige from '../../../assets/gabriel/PorschePrestige.mp4';

const GabrielVideo = () => {
  return (
    <section className="custom-container w-[90%]">
      <GabrielTitleText text="Video Editing" />
      <p className="mb-10">
        My secondary responsibility involved the creation of localized Groupe
        Gabriel video ads. This task required me to blend various official
        videos with smooth transitions to create a coherent narrative flow,
        ensuring the inclusion of Groupe Gabriel’s information and logo both
        throughout the video and in the outro. The aim was to produce engaging
        and informative content that effectively communicated the brand’s
        message to its audience.
      </p>

      <div className="flex flex-col items-center justify-center gap-10">
        <div>
          <video width="1000" autoplay controls>
            <source src={PorschePrestige} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Porsche Prestige golf event video</p>
        </div>

        <div>
          <video width="1000" autoplay controls>
            <source src={AudiQ7video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Audi Gabriel Q7 video</p>
        </div>

        <div>
          <video width="1000" autoplay controls>
            <source src={Audivideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Audi Gabriel video ad</p>
        </div>
      </div>
    </section>
  );
};
export default GabrielVideo;
