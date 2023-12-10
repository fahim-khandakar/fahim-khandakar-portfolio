import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ScrollUpButton from "./Components/ScrollUpBtn/ScrollUpBtn";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <About></About>
        <Contact></Contact>
        <ScrollUpButton />
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;