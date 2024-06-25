import { CertificationCards } from './';
import { DynamicPreview } from '../';
//DATA
import { certificationCards } from '../../data/data';

const CertificationPage = () => {
  return (
    <main className="px-[4%]">
      <DynamicPreview
        pageDescription="
Self-studying UX/UI design and front-end development. Obtained 13 certifications in both fields. Always looking for opportunities to learn more technologies."
        pageTitle="Narae Jang | Certifications in UI/UX Design & Development"
      />

      <section className="my-4 md:my-8 lg:my-12 rounded-2xl bg-neutral-100">
        <div className="px-[4%] w-fit mx-auto py-14 md:py-20">
          <div className="mb-4">
            <h3 className="font-title text-neutral-900 uppercase text-3xl leading-tight">
              certifications
            </h3>
            {/* <p>
              Past a year and half, I've been self-studying UI/UX Design and
              Front-end Development.
            </p> */}
          </div>
          <CertificationCards cards={certificationCards} />
        </div>
      </section>
    </main>
  );
};
export default CertificationPage;
