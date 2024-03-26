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
      <GabrielTitle />
      <GabrialBannerandWeb />
      <GabrielVideo />
      <GabreilPrint />
    </main>
  );
};
export default Gabriel;
