import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./view/homeView";
import FormView from "./view/formView";

function App() {

  return (
    <BrowserRouter basename="/">
    <Routes>
    <Route path="/" element={<HomeView/>}/>
    <Route path="/myform" element={<FormView/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
