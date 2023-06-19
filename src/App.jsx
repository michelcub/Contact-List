import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./view/homeView";
import FormView from "./view/formView";
import { AppProvider } from "./Context/AppContext";

function App() {

  return (
    <BrowserRouter basename="/">
      <AppProvider>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/myform" element={<FormView />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App;
