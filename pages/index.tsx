import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Head from 'next/head'
import Register from "./register"
import React from "react";
import RegistrationComplete from "./RegistrationComplete";
import TimeBoxComponent from "./components/TimeBoxComponent/TimeBoxComponent";
import LoadingComponent from "./components/LoadingComponent/LoadingComponent";
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
