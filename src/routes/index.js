import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Description from "../views/Description";
import Favourites from "../views/Favourites";
import Home from "../views/Home";
import Layout from "./Layout";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
       <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="description/:id" element={<Description />} />
            <Route path="favourites" element={<Favourites />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
