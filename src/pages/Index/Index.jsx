import React from "react";
import NavbarTop from "../../Components/NavbarTop/NavbarTop";
import Footer from "../../Components/Footer/Footer";
import Main from "../../Components/Main/Main";
import Questions from "../../Components/Questions/Questions" 


export default function Index() {
  return (
    <>
      <NavbarTop />
      <main>
        <Main />
        <Questions />
      </main>
      <Footer />
    </>
  );
}
