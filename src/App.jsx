import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomeLayout, Error, Home, About } from './components';
import {
  Ganadara,
  RedesignIfly,
  Candle,
  CalegoDigitalMarketing,
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
      { path: 'about', element: <About /> },
      { path: 'ganadara-bar', element: <Ganadara /> },
      { path: 'redesign-websites', element: <RedesignIfly /> },
      { path: 'candle-ifly', element: <Candle /> },
      { path: 'calego-digital-marketing', element: <CalegoDigitalMarketing /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
