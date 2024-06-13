import { useProjectContext } from '../Works';

const WorkCategories = () => {
  const { allCategories, filterItems, currentCategory } = useProjectContext();

  return (
    <div className="flex flex-1 flex-row flex-nowrap overflow-x-auto w-full md:flex-none gap-3 items-center justify-start px-[4%] xl:w-auto">
      {allCategories.map((category, index) => {
        return (
          <div
            className="flex-auto md:flex-none shrink-0 max-w-full"
            key={category + index}>
            <button
              type="button"
              key={category}
              className={`border border-neutral-100 rounded-full py-2 px-4 bg-neutral-100 text-neutral-400 text-sm capitalize transition-all hover:bg-neutral-200 hover:text-neutral-500 hover:border-neutral-200  ${
                currentCategory === category &&
                '!border-neutral-300 !text-neutral-700 !bg-transparent'
              }`}
              onClick={() => filterItems(category)}>
              {category}
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default WorkCategories;
