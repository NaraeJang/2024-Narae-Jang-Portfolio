import TitleText from '../TitleText';

const IflyEnding = () => {
  return (
    <section>
      <div className="custom-container flex flex-col md:flex-row md:gap-10 w-[90%]">
        <div className="md:w-[50%]">
          <TitleText text="Result" />
          <p>
            Current IFLY website uses most of the new features we built. As a
            result, it enables users to browse and shop all items without
            anxiety to find several websites. In addition, Calego was able to
            integrate all websites into one, drive more sales and gather SEO and
            reviews.
          </p>
        </div>

        <div className="md:w-[50%] mt-[5rem] md:mt-0">
          <TitleText text="Takeaways" />
          <p>
            <strong className="text-gray-600">Less is more.</strong>
            <br /> When Calego had 4 different webistes, it overwhelmed the
            users. By simplifying the front end of the website we facilitated
            the user journey.
          </p>
          <p className="mt-4">
            <strong className="text-gray-600">
              Collaborative work always leads to better result.
            </strong>
            <br /> As a team, we communticated and brainstormed togther so we
            could get diverse ideas to solve the problems that we had. If I had
            done this project alone, I would not have been able to reach the
            effective solution.
          </p>
          <p className="mt-4 mb-[10rem]">
            <strong className="text-gray-600">Divide and conquer!</strong>
            <br /> when the project is too big to handle, breaking it into
            pieces and solving them one by one helps alleviate development.
          </p>
        </div>
      </div>
    </section>
  );
};
export default IflyEnding;
