import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Error, HomeLayout } from './components';
import { CertificationPage } from './components/certificationPage';
import { Home } from './components/homepage';
import {
  GabrielVideo,
  GabrielPrint,
  GabrielDigitalMarketing,
  ProjectLayout,
} from './components/projects';

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
    ],
  },
  {
    path: '/work/',
    element: <ProjectLayout />,
    errorElement: <Error />,
    children: [
      { path: 'group-gabriel-video-ads', element: <GabrielVideo /> },
      { path: 'group-gabriel-publication-design', element: <GabrielPrint /> },
      {
        path: 'group-gabriel-digital-marketing',
        element: <GabrielDigitalMarketing />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
