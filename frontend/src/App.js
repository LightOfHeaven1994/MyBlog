import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Login from './components/Login';
import Register from './components/Register';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Home/>
    </div>
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
  {
    path: "/projects",
    element: <div>
      <Projects/>
    </div>
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
