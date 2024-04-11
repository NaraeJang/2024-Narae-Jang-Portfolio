import {
  GabrielTitle,
  GabrielVideo,
  GabreilPrint,
  GabrialBannerandWeb,
} from './GabrielComponents';

const Gabriel = () => {
  return (
    <main id="gabriel" className="text-left">
      <div className="hero"></div>
      <div className="max-w-[2560px] mx-auto">
        <GabrielTitle />
        <GabrialBannerandWeb />
        <GabrielVideo />
        <GabreilPrint />
      </div>
    </main>
  );
};
export default Gabriel;
