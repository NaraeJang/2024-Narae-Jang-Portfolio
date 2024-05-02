import AudiQ7video from '../../assets/gabriel/AudiQ7.mp4';
import Audivideo from '../../assets/gabriel/AudiGabrielVideo.mp4';
import PorschePrestige from '../../assets/gabriel/PorschePrestige.mp4';

const GabrielVideo = () => {
  return (
    <section>
      <div>
        <video autoPlay muted loop>
          <source src={PorschePrestige} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="custom-container w-[90%] text-left">
        <p className="mb-10">
          My responsibility involved the creation of localized Groupe Gabriel
          video ads. This task required me to blend various official videos with
          smooth transitions to create a coherent narrative flow, ensuring the
          inclusion of Groupe Gabriel’s information and logo both throughout the
          video and in the outro. The aim was to produce engaging and
          informative content that effectively communicated the brand’s message
          to its audience.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 mb-40 text-right">
        <div>
          <video controls>
            <source src={Audivideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="px-[5%]">Audi Gabriel video ad</p>
        </div>

        <div>
          <video controls className="w-screen">
            <source src={AudiQ7video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="px-[5%]">Audi Gabriel Q7 video</p>
        </div>
      </div>
    </section>
  );
};
export default GabrielVideo;
