import {
  CTitle,
  CEmailNewsletter,
  CSocialMedia,
  Cbanners,
  CCooperated,
  CEnding,
} from './CalegoMarketing';

const CalegoDigitalMarketing = () => {
  return (
    <main id="digital-marketing">
      <div className="w-full h-full hero"></div>
      <div className="max-w-[2560px] mx-auto">
        <CTitle />
        <CEmailNewsletter />
        <CSocialMedia />
        <Cbanners />
        <CCooperated />
        <CEnding />
      </div>
    </main>
  );
};
export default CalegoDigitalMarketing;
