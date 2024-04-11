import Ew01Img from '../../assets/ew/ew1.webp';
import Ew02Img from '../../assets/ew/ew2.webp';

const EwNetwork = () => {
  return (
    <main
      id="ew_network-top"
      className="text-left w-[90%] max-w-[2560px]  mx-auto">
      <section className="py-[6rem] lg:py-[10rem] flex flex-col">
        <div>
          <span className="poppins-medium">EW Network</span>
          <h3 className="dt-black text-3xl">Stationary Design</h3>
          <p className="mt-[1.75rem] md:mb-[2rem]">
            As a freelance designer, I had the opportunity to collaborate with
            EW Network, an Educational Agency assisting individuals in finding
            local language study opportunities. My role involved crafting
            various marketing materials to enhance their brand presence and
            communicate their services effectively.
          </p>
        </div>

        <img src={Ew01Img} className="w-full max-w-[100rem] mx-auto mt-5" />
        <img src={Ew02Img} className="w-full max-w-[100rem] mx-auto  mt-5" />
        <p className="mt-[1.75rem] md:mt-[4rem]">
          Through collaborative efforts with EW Network, I successfully
          developed a suite of marketing materials that effectively represented
          their brand and communicated their mission to prospective clients. The
          designs were well-received and contributed to an enhanced brand image
          for the agency, ultimately supporting their goal of connecting
          individuals with valuable language learning opportunities.
        </p>
      </section>
    </main>
  );
};
export default EwNetwork;
