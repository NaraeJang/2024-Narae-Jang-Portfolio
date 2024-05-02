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
  LogoDesign,
  Artwork,
  GabrielVideo,
} from './components/pages/';

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
      { path: 'ganadara-bar', element: <Ganadara /> },
      { path: 'redesign-websites', element: <RedesignIfly /> },
      { path: 'candle-ifly', element: <Candle /> },
      { path: 'calego-digital-marketing', element: <CalegoDigitalMarketing /> },
      { path: 'group-gabriel', element: <Gabriel /> },
      { path: 'ganabar-print', element: <PrintGana /> },
      { path: 'ew_network', element: <EwNetwork /> },
      { path: 'logo_design', element: <LogoDesign /> },
      { path: 'artwork', element: <Artwork /> },
      { path: 'gabriel-video', element: <GabrielVideo /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
