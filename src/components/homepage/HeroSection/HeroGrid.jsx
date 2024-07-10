import { GridNarae, GridProjects } from './';

const HeroGrid = () => {
  return (
    <div className="sticky top-0 left-0 h-svh flex justify-center items-center w-full py-10">
      <div className="w-full h-full grid grid-cols-12 grid-rows-12 gap-5">
        <div className="col-span-3 row-span-8 bg-neutral-200 rounded-2xl">
          1
        </div>

        <GridProjects />
        <GridNarae />
        <div className="col-span-4 row-span-6 bg-neutral-200 rounded-2xl">
          1
        </div>
        <div className="col-span-5 row-span-4 bg-neutral-200 rounded-2xl"></div>
        <div className="col-span-3 row-span-4 bg-neutral-200 rounded-2xl">
          3
        </div>
      </div>
    </div>
  );
};
export default HeroGrid;
