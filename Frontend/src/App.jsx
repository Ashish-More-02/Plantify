import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Login from "./components/Login";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[rgb(245,255,245)]">
      <Header></Header>
      <Hero></Hero>
      <Body></Body>
      {/* <Login></Login> */}
      <About></About>
      <Footer></Footer>
    </div>
  );
};

export default App;
