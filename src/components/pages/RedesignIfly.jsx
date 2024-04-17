import {
  IflyTitle,
  IflyResearch,
  IflyPersona,
  IflyUserJourneyToUserFlow,
  IflySitemapToWireFrames,
  IflyStyleGuide,
  IflyProtos,
  UIDesktop,
  UIMobile,
  IflyEnding,
} from './RedesignComponents';

const RedesignIfly = () => {
  return (
    <main id="redesign-ifly" className="text-left  bg-[#fff]">
      <div className="hero" id="ifly-hero"></div>
      <div className="max-w-[2560px] mx-auto">
        <IflyTitle />
        <IflyResearch />
        <IflyPersona />
        <IflyUserJourneyToUserFlow />
        <IflySitemapToWireFrames />
        <IflyStyleGuide />
        <IflyProtos />
        <UIDesktop />
        <UIMobile />
        <IflyEnding />
      </div>
    </main>
  );
};
export default RedesignIfly;
