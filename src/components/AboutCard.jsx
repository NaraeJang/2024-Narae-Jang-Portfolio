const AboutCard = ({ id, year, title, linkTitle, link }) => {
  return (
    <article className="education-card">
      <p>{year}</p>
      <h5 className="poppins-semibold text-lg">{title}</h5>
      <a href={link} target="_blank" className="about-link">
        {linkTitle}
      </a>
    </article>
  );
};
export default AboutCard;
