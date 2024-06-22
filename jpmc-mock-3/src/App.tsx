import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Layout/RootLayout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup'
import Blog  from './Pages/Blog';
import About from './Pages/About'
import { Toaster } from './components/ui/sonner';
import { DataAnalytics } from './components/component/data-analytics';
function App() {
  // console.log("git")
  const router = createBrowserRouter([
    {
      path: '',
      element: <RootLayout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'blog',
          element: <Blog />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'stats',
          element: <DataAnalytics />,
        }
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'signup',
      element: <Signup />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </>
  );
}

export default App;
