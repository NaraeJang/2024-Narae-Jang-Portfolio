import designProcess from '../../../assets/ganadara-assets/DesignProcess.webp';

const GanaDesignProcess = () => {
  return (
    <section id="gana-design-process">
      <div className="custom-container w-[90%] text-left">
        <h4 className="dt-black text-xl mb-4">The Problem</h4>
        <p>
          I used User-centered design (UCD) thinking process in order to
          empathize with user to understand their feelings or thoughts in a
          situation.
        </p>
        <img
          data-enlargable
          src={designProcess}
          className="w-full max-w-[80rem] mx-auto mt-12"
        />
      </div>
    </section>
  );
};
export default GanaDesignProcess;
