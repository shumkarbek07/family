import Header from "./components/Header/Header";
import Projects from "./components/Project/Projects";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Kuttubek from "./components/Card/Kuttubek/Kuttubek";
import Astar from "./components/Card/Astar/Astar";
import Akjol from "./components/Card/Akjol/Akjol";
import Albina from "./components/Card/Albina/Albina";
import Asema from "./components/Card/Asema/Asema";
import Text from "./components/Text";
import Photo from "./components/Photo/Photo";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Projects />
        <Routes>
          <Route path="/Kuttubek" element={<Kuttubek />} />
          <Route path="/Astar" element={<Astar />} />
          <Route path="/Akjol" element={<Akjol />} />
          <Route path="/Albina" element={<Albina />} />
          <Route path="/Asema" element={<Asema />} />
        </Routes>
        <Portfolio />
        <Text />
        <Photo />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
