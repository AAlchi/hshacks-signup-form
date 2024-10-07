import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Head from 'next/head'

import React from "react";
import RadioComponent from "./components/RadioComponent/RadioComponent";



export default function Home() {



  

  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      
      <Header></Header>
      <div className="flex items-center justify-center bg-none">
        <div className="bg-white inline-block rounded w-[600px] p-6 mt-10">
          <RadioComponent question={"What grade are you in?"} name={"grade"} listOfNames={["9","10","11", "12"]}></RadioComponent>
          <RadioComponent question={"What is your shirt size?"} name={"shirtSize"} listOfNames={["SM","MD","LG", "XL"]}></RadioComponent>
          <RadioComponent question={"Do you have a laptop you can bring?\n(Unfortunately, we aren't able to provide laptops this year.)"} name={"laptop"} listOfNames={["Yes: Please bring it!","No"]}></RadioComponent>
        </div>
      </div>
      
      
      <Footer/>
    </>
  );
}
