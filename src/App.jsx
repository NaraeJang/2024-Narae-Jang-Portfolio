import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Error, HomeLayout } from './components';
import { CertificationPage } from './components/certificationPage';
import { Home } from './components/homepage';
import {
  ProjectLayout,
  GabrielVideo,
  GabrielPrint,
  GabrielDigitalMarketing,
  CalegoTag,
  CalegoDigitalMarketing,
  CalegoB2C,
  VacayBG,
  ArcadeOneUpWarranty,
  BarGanaMenu,
  BarGanaBC,
  BarGanaApp,
  EwNetwork,
  HanInternational,
  JakoLogo,
  RkLogo,
  Wegic,
  Jobmate,
  NaraeJang,
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
      {
        path: 'calego-ifly-register-your-tag',
        element: <CalegoTag />,
      },
      {
        path: 'calego-digital-marketing',
        element: <CalegoDigitalMarketing />,
      },
      {
        path: 'calego-ifly-luggage-website-redesign',
        element: <CalegoB2C />,
      },
      {
        path: 'calego-vacay-brand-guideline',
        element: <VacayBG />,
      },
      {
        path: 'arcade1up-warranty-sticker-design',
        element: <ArcadeOneUpWarranty />,
      },
      {
        path: 'bar-ganadara-menu-design',
        element: <BarGanaMenu />,
      },
      {
        path: 'bar-ganadara-business-card-design',
        element: <BarGanaBC />,
      },
      {
        path: 'bar-ganadara-booking-app',
        element: <BarGanaApp />,
      },
      {
        path: 'ew-network-print-design',
        element: <EwNetwork />,
      },
      {
        path: 'han-international-logo-design',
        element: <HanInternational />,
      },
      {
        path: 'jako-logo-design',
        element: <JakoLogo />,
      },
      {
        path: 'r&k-logo-design',
        element: <RkLogo />,
      },
      {
        path: 'wegic',
        element: <Wegic />,
      },
      {
        path: 'jobmate',
        element: <Jobmate />,
      },
      {
        path: 'naraejang-portfolio',
        element: <NaraeJang />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
