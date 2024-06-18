const Card = ({ id, year, title, linkTitle, link, extraClass }) => {
  return (
    <article
      className={`group bg-white rounded-2xl border border-neutral-100 hover:border-neutral-300 p-[2.3rem] w-full max-w-[25rem] transition-all flex flex-col gap-3 items-center justify-between ${extraClass}`}>
      <p className="text-neutral-400 group-hover:text-neutral-500 transition-colors text-sm">
        {year}
      </p>
      <div className="min-h-20 grid place-items-center">
        <h5 className="text-lg group-hover:text-neutral-800 transition-colors font-semibold text-center my-0 mx-auto max-w-[18rem] leading-6">
          {title}
        </h5>
      </div>
      <a href={link} target="_blank" className="about-link">
        <p className="py-2 px-4 bg-neutral-100 rounded-full text-neutral-400 text-sm capitalize hover:bg-neutral-200 hover:text-neutral-500 transition-colors">
          {linkTitle}
        </p>
      </a>
    </article>
  );
};
export default Card;
