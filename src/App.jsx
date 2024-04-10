import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomeLayout, Error, Home, About } from './components';
import {
  Ganadara,
  RedesignIfly,
  Candle,
  CalegoDigitalMarketing,
  Gabriel,
  PrintGana,
  EwNetwork,
} from './components/pages/';
import Lenis from '@studio-freight/lenis';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: 'about', element: <About /> },
      { path: 'ganadara-bar', element: <Ganadara /> },
      { path: 'redesign-websites', element: <RedesignIfly /> },
      { path: 'candle-ifly', element: <Candle /> },
      { path: 'calego-digital-marketing', element: <CalegoDigitalMarketing /> },
      { path: 'group-gabriel', element: <Gabriel /> },
      { path: 'ganabar-print', element: <PrintGana /> },
      { path: 'ew_network', element: <EwNetwork /> },
    ],
  },
]);

function App() {
  // const lenis = new Lenis();

  // lenis.on('scroll', (e) => {
  //   console.log(e);
  // });

  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
