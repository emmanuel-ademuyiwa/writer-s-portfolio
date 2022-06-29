import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import Homepage from "./pages/Homepage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
