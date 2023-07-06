import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className={isDarkMode ? "App dark" : "App"}>
      <Header />
      <Hero />
      <About />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
