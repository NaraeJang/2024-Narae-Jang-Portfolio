import { Title } from './';

const AboutMainMe = () => {
  return (
    <section id="about-me">
      <div className="pt-[6rem] pb-20">
        <Title title="about me" />
        <div className="text-left">
          <p className="mt-6 mb-5">
            Hi! I&apos;m Narae.
            <br />
            I'm passionate about coding and view it as a powerful tool to bring
            imaginative concepts to life in the online world. I have over three
            years of experience in the design realm where I've gained an
            understanding of the intricacies of creating visually appealing and
            functional digital experiences.
          </p>
          <p className="mb-5">
            Through my experience as a designer, I recognize the critical
            intersection of design and development. This unique vantage point
            enables me to facilitate effective communication, streamline
            workflow, and ultimately deliver superior results. The combination
            of my design background and web development skills enables me to
            seamlessly bridge the gap between the aesthetics and functionality.
          </p>
          <p>
            Originally from South Korea, and currently based in Montreal,
            Canada, my diverse cultural background enriches my creative
            approach, allowing me to infuse international perspectives into my
            work.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutMainMe;
