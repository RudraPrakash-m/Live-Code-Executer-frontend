import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Features from "./pages/Features";
import EditorPage from "./pages/EditorPage";

import "./index.css";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />

        {/* FEATURES PAGE */}
        <Route path="/features" element={<Features />} />

        {/* about page */}
        <Route path="/about" element={<About />} />

        {/* EDITOR PAGE */}
        <Route path="/editor/:roomId" element={<EditorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
