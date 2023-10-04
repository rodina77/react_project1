import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Html from "./pages/html";
import Css from "./pages/css";
import Java from "./pages/java";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Html/>}/>
      <Route path="/css" element={<Css/>}/>
      <Route path="/java" element={<Java/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
