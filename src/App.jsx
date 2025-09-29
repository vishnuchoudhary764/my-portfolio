import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './component/Dashboard'
import Home from './component/Home';
import About from './component/About'
import Project from './component/Project'
import Skill from './component/Skill'
import Contact from './component/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <div>
          <Dashboard/>
          <Home/>
          <About />
          <Project />
          <Skill />
          <Contact />
        </div>
    },
    {
      path: "/about",
      element:
        <div>
          <Dashboard />
          <About />
        </div>
    },
    {
      path: "/Project",
      element:
        <div>
          <Dashboard />
          <Project />
        </div>
    },
    {
      path: "/Skills",
      element:
        <div>
          <Dashboard />
          <Skill />
        </div>
    },
    {
      path: "/Contact",
      element:
        <div>
          <Dashboard />
          <Contact />
        </div>
    },
  ]
)


function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,

    });
  }, []);

  return (
    <div className='router'>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
