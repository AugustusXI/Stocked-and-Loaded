import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ButtonAppBar from "./components/ButtonAppBar";

function App() {
  return (
    // <Home />
    <Router>
      <>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<onOrder />} /> */}
          {/* <Route path="/" element={<outOfStock />} /> */}
          {/* <Route path="/" element={<toOrder />} /> */}
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
