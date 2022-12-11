
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import ContactForm from './Pages/Home/ContactForm';
import Home from './Pages/Home/Home';
import ProjectDetails from './Pages/Home/Project/ProjectDetails/ProjectDetails';
import Resume from './Pages/Resume/Resume';
import Skills from './Pages/Skills/Skills';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/contact',
          element:<ContactForm></ContactForm>
        },
        {
          path:'/skills',
          element:<Skills></Skills>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/resume',
          element:<Resume></Resume>
        },
        {
          path:'/About',
          element:<About></About>
        },
        {
          path:'/project/:id',
          element:<ProjectDetails></ProjectDetails>,
         
          
        }
      ]
    }

  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    
    </div>
  );
}

export default App;
