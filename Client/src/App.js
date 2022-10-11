import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OnOrder from "./pages/OnOrder";
import OutOfStock from "./pages/OutOfStock";
import ToOrder from "./pages/ToOrder";
import Footer from "./components/Footer";
import ButtonAppBar from "./components/ButtonAppBar";


function App() {
  return (
    <Router>
      <>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onorder" element={<OnOrder />} />
          <Route path="/outofstock" element={<OutOfStock />} />
          <Route path="/toorder" element={<ToOrder />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
