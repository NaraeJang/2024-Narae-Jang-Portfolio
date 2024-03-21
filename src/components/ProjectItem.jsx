import { PiGithubLogoLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const ProjectItem = ({
  category,
  img,
  imgAlt,
  client,
  title,
  keyword,
  liveBtn,
  livePath,
  designBtn,
  designPath,
  git,
  gitLink,
}) => {
  return (
    <article className="work-article relative">
      <div className="img-container">
        {gitLink && (
          <a href={gitLink} target="_blank" className="link">
            <div className="pill-container absolute top-[1.6rem] left-6 gap-3.5">
              {category.map((item, index) => {
                return (
                  <span key={title + index} className="category-pill">
                    #{item}
                  </span>
                );
              })}
            </div>
            <img src={img} alt={imgAlt} />
          </a>
        )}
        {!gitLink && designBtn && (
          <HashLink to={designPath} className="link">
            <div className="pill-container absolute top-[1.6rem] left-6 gap-3.5">
              {category.map((item, index) => {
                return (
                  <span key={title + index} className="category-pill">
                    #{item}
                  </span>
                );
              })}
            </div>
            <img src={img} alt={imgAlt} />
          </HashLink>
        )}
      </div>
      <div className="p-5 md:p-6">
        <div className="text-left mb-[1.75rem] flex flex-col justify-between">
          <span>{client}</span>
          <h3 className="poppins-semibold">{title}</h3>
          <p className="mt-3 h-14">{keyword}</p>
        </div>
        <footer className="flex flex-row flex-wrap items-center justify-end gap-3.5">
          {designBtn && (
            <HashLink
              to={designPath}
              className="btn btn-secondary"
              onClick={(e) => e.stopPropagation()}>
              {designBtn}
            </HashLink>
          )}
          {liveBtn && (
            <a
              href={livePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary">
              {liveBtn}
            </a>
          )}
          {git && (
            <a
              href={gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="git">
              <PiGithubLogoLight />
            </a>
          )}
        </footer>
      </div>
    </article>
  );
};
export default ProjectItem;
