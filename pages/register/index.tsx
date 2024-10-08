import RadioComponent from "../components/RadioComponent/RadioComponent";
import React, { useState } from "react";

const Register = () => {

  const [data, setData] = useState([]); 

  const handleRadioComponentData = (data: string) => { 
    // setData(data);
    console.log(data); 
  };

  return(
  <div className="flex items-center justify-center bg-none">
    <div className="bg-white inline-block rounded w-[600px] p-6 mt-[85px]">
      <RadioComponent question={"What grade are you in?"} name={"grade"} listOfNames={["9","10","11", "12"]} answer={handleRadioComponentData}/>
      {/* <RadioComponent question={"What is your shirt size?"} name={"shirtSize"} listOfNames={["SM","MD","LG", "XL"]}/>
      <RadioComponent question={"Do you have a laptop you can bring?\n(Unfortunately, we aren't able to provide laptops this year.)"} name={"laptop"} listOfNames={["Yes: Please bring it!","No"]}/> */}
    </div>
  </div>
  )

}
export default Register;