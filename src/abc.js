
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { createBrowserRouter,RouterProvider, } from "react-router-dom";
import './App.css';
import Concept from "./Concept";
const router=createBrowserRouter([
  {
    path :"/",
    element:<Home/>,
 },
  {
   path :"/Home",
   element:<Home/>,
},
{
  path :"/About",
  element:<About/>,
},
{
  path :"/Contact",
  element:<Contact/>,
},
{
  path :"/test",
  element:<Concept/>,
},


]);

function App() {
  return (
    <div className="container">
      <RouterProvider router={router}/>
    </div>
    
  );
};

export default App;