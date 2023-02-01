import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav'
import Projects from './pages/Projects';
import Login from './pages/Login';
import Register from './pages/Register';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "projects",
        element: <Projects/>
      },
    ]
  },
  {
    path: "/login",
    element: <div>
      <Login/>
    </div>
  },
  {
    path: "/register",
    element: <div>
      <Register/>
    </div>
  },
])

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
