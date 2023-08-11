import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

function RootLayout() {
  return (
    <>
      <div style={{maxWidth:'65%', margin:'0 auto'}}>
          <MainNavigation />
        <main>
          <Outlet />
        </main>
      </div>
      <div
        style={{
          backgroundColor: "#000",
        }}
      >
        <Footer/>
      </div>
    </>
  );
}

export default RootLayout;
