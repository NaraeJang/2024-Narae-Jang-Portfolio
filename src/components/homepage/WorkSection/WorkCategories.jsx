import { useProjectContext } from '../Works';

const WorkCategories = () => {
  const { allCategories, filterItems, currentCategory } = useProjectContext();

  return (
    <div className="gap-3 flex flex-row flex-wrap items-center">
      {allCategories.map((category) => {
        return (
          <button
            type="button"
            key={category}
            className={`border border-neutral-100 rounded-full py-2 px-4 bg-neutral-100 text-neutral-400 text-sm capitalize transition-all hover:bg-neutral-200 hover:text-neutral-500 hover:border-neutral-200  ${
              currentCategory === category &&
              '!border-neutral-300 !text-neutral-700 !bg-transparent '
            }`}
            onClick={() => filterItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default WorkCategories;
