import {
  GridNarae,
  GridProjects,
  GridDownTime,
  GridLocalTime,
  GridAccordion,
  GridComponentOfMe,
} from './';

const HeroGrid = () => {
  return (
    <div className="sticky top-0 left-0 h-svh flex justify-center items-center w-full py-6">
      <div className="w-full h-full grid grid-rows-2 md:grid-cols-12 md:grid-rows-12 gap-5">
        <GridComponentOfMe />
        <GridProjects />
        <GridNarae />
        <GridAccordion />
        <GridDownTime />
        <GridLocalTime />
      </div>
    </div>
  );
};
export default HeroGrid;
