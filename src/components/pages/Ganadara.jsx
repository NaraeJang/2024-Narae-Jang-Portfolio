import { Loading } from '../';
import {
  GanaDesignProcess,
  GanaTitle,
  GanaToPainPoint,
  GanaJourneyPaper,
} from './gamadara/';

const Ganadara = () => {
  return (
    <main id="ganadara" className="relative">
      {/* <Loading /> */}
      <div className="hero" id="gana-hero"></div>
      <GanaTitle />
      <GanaDesignProcess />
      <GanaToPainPoint />
      <GanaJourneyPaper />
    </main>
  );
};
export default Ganadara;
