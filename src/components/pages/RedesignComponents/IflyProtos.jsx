import TitleText from '../TitleText';
import rdProto01 from '../../../assets/redesign-assets/rd-proto-1.webp';
import rdProto02 from '../../../assets/redesign-assets/rd-proto-2.webp';
import rdProto03 from '../../../assets/redesign-assets/rd-proto-3.webp';

const IflyProtos = () => {
  return (
    <section className="bg-[#fff]">
      <div className="custom-container w-[90%]">
        <TitleText text="Prototyping" />

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-8 md:flex-row max-w-[57rem] mx-auto md:items-center">
            <img
              src={rdProto01}
              alt="ifly proto img"
              className="w-full max-w-[37rem] mx-auto mt-8  rounded-xl"
            />
            <p className="md:max-w-[18rem]">
              Users are able to browse all brands and shop for items in IFLY
              website without the hassle of visiting 4 different websites.
            </p>
          </div>

          <div className="flex flex-col gap-8 md:flex-row-reverse max-w-[57rem] mx-auto md:items-center">
            <img
              src={rdProto02}
              alt="ifly proto img"
              className="w-full max-w-[37rem] mx-auto mt-8  rounded-xl"
            />
            <p className="md:max-w-[18rem] md:text-right">
              Users can register their warranty in a fast and intuitive way.
            </p>
          </div>

          <div className="flex flex-col gap-8 md:flex-row max-w-[57rem] mx-auto md:items-center">
            <img
              src={rdProto03}
              alt="ifly proto img"
              className="w-full max-w-[37rem] mx-auto mt-8  rounded-xl"
            />
            <p className="md:max-w-[18rem]">
              By designing the pages that were uncompleted, I eliminated the
              feeling of an incomplete website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default IflyProtos;
