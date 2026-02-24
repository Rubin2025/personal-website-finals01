import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Guestbook from "./pages/Guestbook";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <nav style={{ padding: "20px", display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/guestbook">Guestbook</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/guestbook" element={<Guestbook />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;