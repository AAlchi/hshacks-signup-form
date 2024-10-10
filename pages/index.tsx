import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Head from 'next/head'
import Register from "./Register/Register"
import React from "react";




export default function Home() {

  

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      
      <Header/>
      
      <Register/>
      <Footer/>
    </>
  );
}
