import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section>
      <div className="custom-container">
        <h3 className="dt-black text-[6.25rem] leading-none">404</h3>
        <h3 className="dt-black text-[5rem] leading-none">page</h3>
        <p className="pt-10 pb-6">
          Opps! It seems like you&apos;re in the wrong page.{' '}
        </p>
        <Link to="./" className="btn btn-secondary">
          Go Back Home
        </Link>
      </div>
    </section>
  );
};
export default Error;
