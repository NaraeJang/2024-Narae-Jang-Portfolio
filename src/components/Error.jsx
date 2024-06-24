import { Navbar, Footer } from './';

const Error = () => {
  return (
    <div className="relative">
      <Navbar />
      <main className="h-[90svh] detail-section-middle mx-[4%] flex items-center justify-center">
        <div className="text-center flex flex-col gap-3 w-full">
          <h2 className="glitch font-title text-8xl max-w-fit" data-text="404">
            404
          </h2>
          <p className="text-neutral-400">
            The page you're looking for can't be found.
          </p>
          <a href="/">
            <p className="leading-none py-4 px-8 bg-white rounded-full transition-all shadow-footer hover:text-neutral-900 inline-block mt-2">
              Go Back Home
            </p>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Error;
