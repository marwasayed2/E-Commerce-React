import './App.css'
import FrequentlyAskedQuestions from './Components/F&Qs/FrequentlyAskedQuestions'
import Checkout from './Components/Checkout/Checkout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Thank from './Components/Thank/Thank';
import Collections from './Components/Collections/Collections';
import { Layout } from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import AboutSection from './Components/About/AboutUsSection';
import BlogDetails from './Components/Blog/BlogDetails';
import Product from './Components/Product-Page/Product';

function App() {
  let Router = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'FrequentlyAskedQuestions', element: <FrequentlyAskedQuestions /> },
        { path: 'Thank', element: <Thank /> },
        { path: 'Collections', element: <Collections /> },
        { path: 'Product/:id', element: <Product /> },
        { path: 'AboutUs', element: <AboutSection /> },
        { path: 'BlogDetails', element: <BlogDetails /> },
        { path: 'Checkout', element: <Checkout /> },
        // { path: '*', element: <NotFound /> }
      ]
    }

  ])

  return (
    <div >
      <RouterProvider router={Router}></RouterProvider>
    </div>
  )
}

export default App
