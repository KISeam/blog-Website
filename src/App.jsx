import React from "react";
import "./App.css";
import TopHeader from "./Component/Header/TopHeader";
import Navbar from "./Component/Header/Navbar";
import Profile from "./Component/HeroSection/Profile/Profile";
import Blogs from "./Component/HeroSection/Blogs/Blogs";
import Footer from "./Component/Footer/Footer";

function App() {
  
  return (
    <>
      <div className="bg-white">
        <TopHeader />
        <Navbar />
        <div className="w-9/12 mx-auto">
          <div className="flex gap-14 my-10">
            <Blogs />
            <Profile />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
