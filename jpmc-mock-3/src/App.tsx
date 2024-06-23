import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Layout/RootLayout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup'
import Blog  from './Pages/Blog';
import About from './Pages/About'
import { Toaster } from './components/ui/sonner';
import { DataAnalytics } from './components/component/data-analytics';
import { Lifeskills } from './components/component/lifeskills';
import Career from './components/component/career';
import { Product } from './components/component/Product';
import FileUploadWidget from './components/component/profile';
import ChatbotComponent from './components/component/chabot';
import Schools from './Pages/schools';
function App() {
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
          path: 'lifeskills',
          element: <Lifeskills/>,
        },
        {
          path: 'stats',
          element: <DataAnalytics />,
        },
        {
          path:'career',
          element:<Career/>,
        },
        {
          path:'schools',
          element:<Schools/>
        },
        {
          path: 'product',
          element:<Product/>,
        },
        {
          path: 'profile',
          element: <FileUploadWidget/>,
        },{
          path:'chat',
          element:<ChatbotComponent/>
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
