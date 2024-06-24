const NaraeJang = () => {
  return (
    <main className="px-[4%] text-center">
      <section className="detail-section-middle">
        <div className="detail-title-container">
          <h2 className="detail-title">Narae Jang Portfolio Website</h2>
          <p className="detail-description">Self-executed Project</p>
          <div className="detail-category-container flex-wrap px-[4%]">
            <span className="detail-category-pill">Photoshop</span>
            <span className="detail-category-pill">Illustrator</span>
            <span className="detail-category-pill">Premier Pro</span>
            <span className="detail-category-pill">Figma</span>
            <span className="detail-category-pill">VS Code</span>
          </div>
        </div>
        <div className="detail-content-container">
          <p>
            You'll discover a collection of projects reflecting my journey as a
            web designer & developer. From designs to full-stack applications,
            each project represents my dedication to crafting user-friendly and
            visually appealing digital experiences. Using a combination of
            front-end technologies like React, TailwindCSS along with back-end
            tools like MongoDB and Express.js, I strive to deliver innovative
            solutions tailored to meet the needs of modern web users.
          </p>
        </div>
        <table className="table-fixed border-collapse border border-neutral-300 rounded-2xl w-full text-sm max-w-3xl bg-white mx-auto">
          <caption className="caption-top mb-3 font-medium text-neutral-700 uppercase tracking-wide">
            Dependencies
          </caption>
          <thead className="bg-neutral-100">
            <tr>
              <th className="border border-neutral-300 p-4">Name</th>
              <th className="border border-neutral-300">Version</th>
              <th className="border border-neutral-300">Name</th>
              <th className="border border-neutral-300">Version</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-neutral-300 p-4">dayjs</td>
              <td className="border border-neutral-300">^0.154.0</td>
              <td className="border border-neutral-300">framer-motion</td>
              <td className="border border-neutral-300">^11.2.10</td>
            </tr>
            <tr>
              <td className="border border-neutral-300 p-4">gsap</td>
              <td className="border border-neutral-300">^3.12.5</td>
              <td className="border border-neutral-300">nanoid</td>
              <td className="border border-neutral-300">^5.0.6</td>
            </tr>
            <tr>
              <td className="border border-neutral-300 p-4">ract</td>
              <td className="border border-neutral-300">^18.2.0</td>
              <td className="border border-neutral-300">react-dom</td>
              <td className="border border-neutral-300">^18.2.0</td>
            </tr>
            <tr>
              <td className="border border-neutral-300 p-4">react-icons</td>
              <td className="border border-neutral-300">^5.0.1</td>
              <td className="border border-neutral-300">react-router-dom</td>
              <td className="border border-neutral-300">^6.22.2</td>
            </tr>
            <tr>
              <td className="border border-neutral-300 p-4">
                react-router-hash-link
              </td>
              <td className="border border-neutral-300">^2.4.3</td>
              <td className="border border-neutral-300">shader gradient</td>
              <td className="border border-neutral-300">^1.2.14</td>
            </tr>
            <tr>
              <td className="border border-neutral-300 p-4">split-type</td>
              <td className="border border-neutral-300">^0.3.4</td>
              <td className="border border-neutral-300">swiper</td>
              <td className="border border-neutral-300">^11.1.1</td>
            </tr>
            <tr>
              <td className="border border-neutral-300 p-4">three</td>
              <td className="border border-neutral-300">^0.154.0</td>
              <td className="border border-neutral-300">tailwind css</td>
              <td className="border border-neutral-300">^3.4.4</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="detail-section-middle">
        <div>
          <h4 className="detail-sub-title">
            Explore the Code Behind This Website
          </h4>
          <p className="mt-4 max-w-3xl mx-auto">
            Would you like to see how I coded this website? You can find the
            code below the button.
          </p>
          <a
            href="https://github.com/NaraeJang/2024-Narae-Jang-Portfolio"
            target="_blank"
            rel="noopener noreferrer">
            <p className="mt-4 py-3 px-6 border border-neutral-300 rounded-full text-base transition-colors hover:text-neutral-700 hover:border-neutral-700 inline-block">
              Visit Github
            </p>
          </a>
        </div>
      </section>
    </main>
  );
};
export default NaraeJang;
