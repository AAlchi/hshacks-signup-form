import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Head from 'next/head'
import Register from "./register"
import React from "react";
import RegistrationComplete from "./components/RegistrationComplete/RegistrationComplete";



export default function Home() {

  

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      
      <Header/>
      
      {/* <Register /> */}
      <RegistrationComplete />
      
      <Footer/>
    </>
  );
}
