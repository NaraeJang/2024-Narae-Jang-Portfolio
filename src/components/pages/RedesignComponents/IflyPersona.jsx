import TitleText from '../TitleText';
import rdPersona from '../../../assets/redesign-assets/rd-persona-img.webp';
const IflyPersona = () => {
  return (
    <section>
      <div className="custom-container w-[90%]">
        <TitleText text="Persona" />
        <p>
          Using the data, I created a persona to represent the ideal user of the
          product so that I can bring a better design solution. Olivia is a
          content creator and also a mom of her family who wants to find the
          best travel products because it can represent her identity and
          herself.
        </p>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 max-w-[1080px] mx-auto items-start justify-center mt-8">
          <img
            src={rdPersona}
            alt="Ifly persona img"
            className="w-full max-w-[27.5rem] mx-auto mt-4 md:mt-8 rounded-xl lg:w-1/2 lg:mt-0"
          />
          <div className="lg:w-1/2 flex flex-col gap-1">
            <p>
              <span className="poppins-semibold capitalize">name:</span> Olivia
            </p>
            <p>
              <span className="poppins-semibold capitalize">age:</span> 34
            </p>
            <p>
              <span className="poppins-semibold capitalize">occupation:</span>{' '}
              Content Creator, Mom
            </p>
            <p>
              <span className="poppins-semibold capitalize">goals:</span>{' '}
              Personalization of her travel gears, establishing sense of
              identity
            </p>
            <p>
              <span className="poppins-semibold capitalize">lift goals:</span>{' '}
              Keep a forward-looking mentality in her life, build and maintain
              personal brand.
            </p>
            <p>
              <span className="poppins-semibold capitalize">expertise:</span>{' '}
              Travel, fashion, digital content creation
            </p>
            <p>
              <span className="poppins-semibold capitalize">quote:</span> Your
              choice makes your life
            </p>

            <p className="mt-3">
              <span className="poppins-semibold capitalize">bio:</span> Olivia
              is a 34 years old digital content creator specialising in
              travelling and fashion, and also a mom to her family. She works
              for herself regardless of time and date. She spends most of her
              time creating digital content and taking care of her family.
              Because of her job, she needs a lot of gear for travelling or her
              content and wants products that can reflect her values and
              identify her.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default IflyPersona;
