import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Head from 'next/head'
import Register from "./register"
import React from "react";
import RegistrationComplete from "./RegistrationComplete";
import TimeBoxComponent from "./components/TimeBoxComponent/TimeBoxComponent";
import { ToastContainer } from 'react-toastify';
import LoadingComponent from "./components/LoadingComponent/LoadingComponent";

export default function Home() {
  return (
    <>
      <ToastContainer />
      <Head>
        <title>HSHacks | Registration</title>
      </Head>
      
      <Header/>
      <Register />
      <Footer/>
    </>
  );
}
