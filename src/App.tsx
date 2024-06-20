import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import BikeScroll from './pages/BikeScroll';
import GalaxyScene from './pages/Galaxyscene/GalaxyScene';
import Geometries from './pages/Geometries';

const App = () => {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/scroll-animations',
          element: <BikeScroll />,
        },

        {
          path: '/galaxy',
          element: <GalaxyScene />,
        },
        {
          path: '/geometries',
          element: <Geometries />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
