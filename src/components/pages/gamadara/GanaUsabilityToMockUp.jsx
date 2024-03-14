import { GanaTitleText } from './';
import usabilityImg01 from '../../../assets/ganadara-assets/Usability01.webp';
import usabilityImg02 from '../../../assets/ganadara-assets/Usability02.webp';
import mockupImg01 from '../../../assets/ganadara-assets/Mockup-Home.webp';
import mockupImg02 from '../../../assets/ganadara-assets/Mockup-table.webp';

const GanaUsabilityToMockUp = () => {
  return (
    <section id="gana-usability-to-mockup">
      <div className="custom-container text-left w-[90%] flex flex-col gap-[10rem]">
        <div>
          <GanaTitleText text="Usability study: findings" />
          <p>
            I conducted two rounds of usability studies. Findings from the first
            study helped guide the designs from wireframes to mockups. The
            second study used a high-fidelity prototype and revealed what
            aspects of the mockups needed refining.
          </p>

          <div className="flex flex-col md:flex-row gap-8 md:items-center md:justify-center mt-12">
            <div>
              <h5 className="poppins-semibold leading-relaxed text-lg">
                Round 1 findings
              </h5>
              <img
                src={usabilityImg01}
                alt="gana usability test 01 img"
                className="w-full max-w-[30rem] sm:mx-auto mt-4"
              />
            </div>
            <div>
              <h5 className="poppins-semibold leading-relaxed text-lg">
                Round 2 findings
              </h5>
              <img
                src={usabilityImg02}
                alt="gana usability test 02 img"
                className="w-full max-w-[30rem] mx-auto mt-4"
              />
            </div>
          </div>
        </div>

        <div>
          <GanaTitleText text="Mockups" />

          <div className="flex flex-col-reverse gap-8 lg:flex-row lg:gap-20 2xl:max-w-[1920px] 2xl:mx-auto">
            <div className="flex flex-col lg:justify-center">
              <h5 className="poppins-semibold leading-relaxed text-lg mb-4">
                Home Page
              </h5>
              <p>
                The second usability study revealed frustration with{' '}
                <strong>
                  too much work for the announcement system and overcrowded home
                  page.
                </strong>
              </p>
              <p className="mt-4">
                <strong>To reduce the traffic</strong> on the home page and
                optimize the announcement system, I{' '}
                <strong>
                  decreased the specific gravity of the announcement part
                </strong>{' '}
                on the home page, and also{' '}
                <strong>users can choose colours or images</strong> depending on
                their will for the announcement background.
              </p>
              <p className="mt-4">
                Furthermore,{' '}
                <strong>
                  by adding an indicator, users can notice if there is more than
                  1 information.
                </strong>
              </p>
            </div>
            <img
              src={mockupImg01}
              alt="gana mockup homepage img"
              className="w-full max-w-[35rem] mx-auto mt-4"
            />
          </div>

          <div className="flex flex-col-reverse gap-8 lg:flex-row lg:gap-20 mt-20 2xl:max-w-[1920px] 2xl:mx-auto">
            <div className="flex flex-col lg:justify-center">
              <h5 className="poppins-semibold leading-relaxed text-lg mb-4">
                My tables page
              </h5>
              <p>
                From the usability study, I found that{' '}
                <strong>
                  users were not able to complete the task of confirming
                  detailed reservation information.
                </strong>{' '}
                Users didn't realize that the box can be expansive. Therefore, I
                included{' '}
                <strong>
                  an indicator to let users recognize that the box can be
                  opened.
                </strong>
              </p>
            </div>
            <img
              src={mockupImg02}
              alt="gana mockup reservation img"
              className="w-full max-w-[35rem] mx-auto mt-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default GanaUsabilityToMockUp;
