import Navbar from "./Components/Navbar/Index";
import Footer from "./Components/Footer/Index";
import Home from "./Pages/Home/Index";
import { Route, Routes } from "react-router-dom";
import Product from "./Pages/Product/Index";
import Collection from "./Pages/Collections/Collections";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections/:page" element={<Collection />} />
        <Route path="/products/:productName" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
