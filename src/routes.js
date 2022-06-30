import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Artikel from "./pages/artikel";
import Home from "./pages/home";
import TukarPoin from "./pages/tukarPoin";
import TentangKami from "./pages/tentangKami";
import Login from "./pages/login";
import Signup from "./pages/login/signup";
import LoginLayout from "./components/layout/loginLayout";

const MainRoute = () => {
  return (
    <Routes>
      {/* layout halaman utama */}
      <Route path="/" element={<Layout />}>
        {/* halaman home */}
        <Route index element={<Home />} />
        {/* halaman tukar poin */}
        <Route path="tukar-poin" element={<TukarPoin />} />
        {/* halaman artikel */}
        <Route path="artikel" element={<Artikel />} />
        {/* halaman tentang kami */}
        <Route path="tentang-kami" element={<TentangKami />} />
      </Route>

      {/* layout halaman login */}
      <Route path="login" element={<LoginLayout />}>
        {/* halaman login */}
        <Route index element={<Login />} />
      </Route>

      {/* layout halaman signup */}
      <Route path="signup" element={<LoginLayout />}>
        {/* halaman signup */}
        <Route index element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
