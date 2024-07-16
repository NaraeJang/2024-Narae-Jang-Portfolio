import { GridNarae, GridProjects, GridDownTime } from './';

const HeroGrid = () => {
  return (
    <div className="sticky top-0 left-0 h-svh flex justify-center items-center w-full py-10">
      <div className="w-full h-full grid grid-rows-2 md:grid-cols-12 md:grid-rows-12 gap-5">
        <div className="hidden invisible md:block md:visible col-span-3 row-span-8 bg-red-200 rounded-2xl">
          1
        </div>

        <GridProjects />
        <GridNarae />
        <div className="row-span-1 md:col-span-4 md:row-span-6 bg-blue-200 rounded-2xl">
          4
        </div>
        <GridDownTime />
        <div className="hidden invisible md:block md:visible col-span-3 row-span-4 bg-neutral-200 rounded-2xl">
          6
        </div>
      </div>
    </div>
  );
};
export default HeroGrid;
