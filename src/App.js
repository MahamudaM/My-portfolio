
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import ContactForm from './Pages/Home/ContactForm';
import Home from './Pages/Home/Home';
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
          path:'/resume',
          element:<Resume></Resume>
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
