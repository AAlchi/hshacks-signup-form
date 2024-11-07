import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Head from 'next/head'
import Register from "./register"
import React from "react";
import RegistrationComplete from "./components/RegistrationComplete/RegistrationComplete";
import TimeBoxComponent from "./components/TimeBoxComponent/TimeBoxComponent";


export default function Home() {

  

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      
      <Header/>
      
      <Register />
      {/* <RegistrationComplete /> */}
      <Footer/>
    </>
  );
}
