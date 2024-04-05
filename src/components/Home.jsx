import { Faq, Header, Projects, Loading, SecondHeader } from './';

const Home = () => {
  return (
    <main>
      <Loading />
      <SecondHeader />
      <Projects />
      <Faq />
    </main>
  );
};
export default Home;
