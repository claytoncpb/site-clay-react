import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Experiencia from "./pages/Experiencia";
import Qualificacoes from "./pages/Qualificacoes";
import Contato from "./pages/Contato";

function App() {
  return (
    <div className="app">
      <Header />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/qualificacoes" element={<Qualificacoes />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    
   <Footer />
  </div>
  );
}

export default App;
