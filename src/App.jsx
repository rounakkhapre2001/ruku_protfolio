import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ExhibitionPage from "./pages/ExhibitionPage.jsx";
import ExhibitionDetailPage from "./pages/ExhibitionDetailPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import BlogDetailPage from "./pages/BlogDetailPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/exhibition" element={<ExhibitionPage />} />
          <Route path="/exhibition/:slug" element={<ExhibitionDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
