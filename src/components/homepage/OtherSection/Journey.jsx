const Journey = () => {
  return (
    <section className="mt-52 px-[4%]">
      <h3 className="font-title text-white uppercase text-3xl leading-tight">
        My Journey
      </h3>

      <ol className="list-none mt-20 px-[4%]">
        <li className="grid grid-cols-7 gap-4 text-neutral-400 pb-4">
          <p className="col-span-3">Current</p>
          <div className="col-span-4">
            <p className="text-neutral-100 text-lg">
              Have been self-studying UX/UI design and front-end development.
              I’ve gotten 13 certifications in both fields. Always looking for
              opportunities to learn more technologies.
            </p>
            <a href="#">
              <p>See Certification</p>
            </a>
          </div>
        </li>

        <li className="grid grid-cols-7 gap-4 text-neutral-400 py-4">
          <p className="col-span-1">2022</p>
          <p className="col-span-2">Calego Inc.</p>
          <p className="col-span-4 text-neutral-100 text-lg">
            Senior Graphic Designer
          </p>
        </li>
      </ol>
    </section>
  );
};
export default Journey;
