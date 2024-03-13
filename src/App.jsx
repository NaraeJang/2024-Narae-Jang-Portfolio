import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomeLayout, Error, Home, About } from './components';
import { Ganadara } from './components/pages/';

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
