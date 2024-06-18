import AudiQ7video from '../../assets/gabriel/AudiQ7.mp4';
import Audivideo from '../../assets/gabriel/AudiGabrielVideo.mp4';
import PorschePrestige from '../../assets/gabriel/PorschePrestige.mp4';

const gabrielVideo = () => {
  return (
    <main className="px-[4%] text-center">
      <section className="rounded-2xl overflow-hidden mt-8">
        <video autoPlay muted loop>
          <source src={PorschePrestige} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <div className="my-4 md:my-8 lg:my-12 px-[4%] py-14 md:py-14 bg-neutral-50 rounded-2xl flex flex-col gap-6">
        <h2 className="font-title text-2xl text-neutral-800">
          Creation of Groupe Gabriel Promotional Videos
        </h2>
        <p className="text-sm text-neutral-400">
          For Porsche Prestige & Audi Gabriel with in-house marketing team in
          2019 - 2021
        </p>
        <div className="text-neutral-500 leading-relaxed flex flex-col gap-2">
          <p>
            Groupe Gabriel is one of the largest car dealership groups in the
            Greater Montreal area.
          </p>
          <p>
            My task required me to blend various official videos with smooth
            transitions to create a coherent narrative flow, ensuring the
            inclusion of Groupe Gabriel’s information and logo both throughout
            the video and in the outro. The aim was to produce engaging and
            informative content that effectively communicated the brand’s
            message to its audience.
          </p>
          <p>
            These videos were displayed at the Porsche VIP Golf Event and on TVs
            in Audi dealerships across several areas in Montreal.
          </p>
        </div>
        <div className="flex flex-row gap-2 justify-center items-center">
          <span className="rounded-full py-2 px-4 bg-neutral-200/75 text-neutral-500/85 text-sm capitalize transition-all">
            Premier Pro
          </span>
          <span className="rounded-full py-2 px-4 bg-neutral-200/75 text-neutral-500/85 text-sm capitalize transition-all">
            After Effect
          </span>
        </div>
      </div>
    </main>
  );
};
export default gabrielVideo;
