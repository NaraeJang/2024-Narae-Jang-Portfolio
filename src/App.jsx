import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Error, HomeLayout } from './components';
import { Home } from './components/homepage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [{ index: true, element: <Home /> }],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
