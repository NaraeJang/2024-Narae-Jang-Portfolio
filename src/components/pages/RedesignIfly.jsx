import { Loading } from '../';
import {
  IflyTitle,
  IflyResearch,
  IflyPersona,
  IflyUserJourney,
  IflyCompetitiveToUserFlow,
  IflySitemapToWireFrames,
  IflyStyleGuide,
  IflyProtos,
  UIDesktop,
  UIMobile,
  IflyEnding,
} from './RedesignComponents';

const RedesignIfly = () => {
  return (
    <main id="redesign-ifly" className="text-left bg-[#ffffff]">
      {/* <Loading /> */}
      <div className="hero" id="ifly-hero"></div>
      <IflyTitle />
      <IflyResearch />
      <IflyPersona />
      <IflyUserJourney />
      <IflyCompetitiveToUserFlow />
      <IflySitemapToWireFrames />
      <IflyStyleGuide />
      <IflyProtos />
      <UIDesktop />
      <UIMobile />
      <IflyEnding />
    </main>
  );
};
export default RedesignIfly;
