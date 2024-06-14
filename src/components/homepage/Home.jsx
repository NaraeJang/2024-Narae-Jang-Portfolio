import { Hero, OtherSections, Works } from './';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';

// Context
const HomeContext = createContext();

const Home = () => {
  const [currentWorkCategory, setCurrentWorkCategory] = useState('all');

  return (
    <HomeContext.Provider
      value={{
        currentWorkCategory,
        setCurrentWorkCategory,
      }}>
      <main>
        <Hero />
        <Works />
        <OtherSections />
      </main>
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext);
export default Home;
