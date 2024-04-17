import {
  CandleTitle,
  CandleUserFlow,
  CandleWireframes,
} from './CandleComponents';
const Candle = () => {
  return (
    <main id="candle" className="bg-white  text-left">
      <div className="hero" id="candle-hero"></div>
      <CandleTitle />
      <CandleUserFlow />
      <CandleWireframes />
    </main>
  );
};
export default Candle;
