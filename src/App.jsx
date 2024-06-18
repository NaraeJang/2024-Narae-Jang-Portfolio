import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Error, HomeLayout } from './components';
import { CertificationPage } from './components/certificationPage';
import { Home } from './components/homepage';
import { GabrielVideo, GabrielPrint } from './components/projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'certifications',
        element: <CertificationPage />,
      },
      { path: 'group-gabriel-video-ads', element: <GabrielVideo /> },
      { path: 'group-gabriel-publications', element: <GabrielPrint /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
