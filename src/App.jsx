import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomeLayout } from './components/homepage';
import { Error } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
