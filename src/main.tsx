import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/onboarding/Loading.tsx";
import Welcome from "./components/onboarding/Welcome.tsx";
import Slide2 from "./components/onboarding/Slide2.tsx";
import Slide1 from "./components/onboarding/Slide1.tsx";
import Slide3 from "./components/onboarding/Slide3.tsx";
import Home from "./components/Home.tsx";
import ProductDetail from "./components/productDetail/ProductDetail.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loading />} />
      <Route path="/home" index element={<Home />} />

      <Route path="/loading" element={<Loading />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/slide1" element={<Slide1 />} />
      <Route path="/slide2" element={<Slide2 />} />
      <Route path="slide3" element={<Slide3 />} />
      <Route path="/productdetail" element={<ProductDetail />} />

    </Routes>
  </BrowserRouter>
);
