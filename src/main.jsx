import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Root from './layout/Root.jsx';
import Services from './pages/services/index.jsx';
import Contact from './pages/contact/index.jsx';
import About from './pages/about/index.jsx';

const router = createHashRouter([
  {
    
    path: "/",
    element: <Root />,
    children: [
     {
      path: '/',
      element: <App />
     },
     {
      path: '/about-us',
      element: <About />
     },
     {
      path: '/contact-us',
      element: <Contact />
     },
     {
      path: '/services',
      element: <Services />
     },
    
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
