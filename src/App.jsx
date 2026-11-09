import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Plants from "./pages/Plants.jsx";
import Industries from "./pages/Industries.jsx";
import Manufacturing from "./pages/Manufacturing.jsx";
import Quality from "./pages/Quality.jsx";
import Policies from "./pages/Policies.jsx";
import GlobalReach from "./pages/GlobalReach.jsx";
import News from "./pages/News.jsx";
import Careers from "./pages/Careers.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:slug" element={<ProductDetail />} />
        <Route path="plants" element={<Plants />} />
        <Route path="industries" element={<Industries />} />
        <Route path="manufacturing" element={<Manufacturing />} />
        <Route path="quality-sustainability" element={<Quality />} />
        <Route path="policies" element={<Policies />} />
        <Route path="global-reach" element={<GlobalReach />} />
        <Route path="news" element={<News />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
