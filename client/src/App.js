import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/AllData/Home";
import AddForm from "./pages/StudentForm/AddForm";


function App(){
   
  
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> }></Route>
          <Route path="/AddForm" element={<AddForm/>}></Route>
          <Route path="/update/:id"  element={<AddForm/>}></Route>
        </Routes>
      </BrowserRouter>
    
    );
}

export default App;