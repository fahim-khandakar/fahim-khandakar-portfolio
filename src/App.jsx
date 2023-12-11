import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ScrollUpButton from "./Components/ScrollUpBtn/ScrollUpBtn";
import MySkills from "./Components/MySkills/MySkills";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<MySkills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <MySkills></MySkills>
        <Projects></Projects>
        <About></About>

        <Contact></Contact>
        <ScrollUpButton />
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
