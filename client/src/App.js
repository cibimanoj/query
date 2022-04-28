import React from "react";
import {Dashboard, Welcome, Register, Error} from "./pages"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
 <BrowserRouter>
 <Routes>
   <Route path="/" element ={<Dashboard/>}/>
   <Route path="/register" element ={<Register/>}/>
   <Route path="/welcome" element ={<Welcome/>}/>
   <Route path="*" element ={<Error/>}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
