import {
  GanaDesignProcess,
  GanaTitle,
  GanaToPainPoint,
  GanaJourneyPaper,
} from './gamadara/';

const Ganadara = () => {
  return (
    <main id="ganadara" className="relative">
      <div className="hero"></div>
      <GanaTitle />
      <GanaDesignProcess />
      <GanaToPainPoint />
      <GanaJourneyPaper />
    </main>
  );
};
export default Ganadara;
