import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Login from "./login/Login";
import Layout from "./layout/Layout";

const MainRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRouters;
