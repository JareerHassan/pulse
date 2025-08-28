import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.js";
import AppRouter from "./AppRouter.js";
import Home_V1 from "./components/homev4.js";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
export default function App() {
  return (
    <>
      <BrowserRouter>
      <Wrapper>

        <AppRouter />
      </Wrapper>
      </BrowserRouter>
    </>
  );
}

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 
