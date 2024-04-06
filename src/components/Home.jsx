import { Faq, Header, Projects, Loading, SecondHeader } from './';

const Home = () => {
  return (
    <main className="relative overflow-hidden">
      <Loading />
      <SecondHeader />
      <Projects />
      <Faq />
    </main>
  );
};
export default Home;
