import React, { useState } from "react";
import TextFieldComponent from "../components/TextFieldComponent/TextFieldComponent";
import RadioComponent from "../components/RadioComponent/RadioComponent"; 


const Register = () => {

  // const [data, setData] = useState([]); 

  const handleRadioComponentData = (radioData: string) => { 
    console.log(radioData); 
  };
  const handleTextFieldComponentData = (textFieldData: string) => { 
    console.log(textFieldData); 
  };

  return(
  <div className="flex items-center justify-center bg-none">
    <div className="bg-white inline-block rounded w-[600px] p-6 mt-[85px]">
      <TextFieldComponent placeHolder="First Name" name="name" question="What is your name?" type="text" textFieldAnswer={handleTextFieldComponentData}/>
      <RadioComponent question={"What grade are you in?"} name={"grade"} listOfNames={["9","10","11", "12"]} radioAnswer={handleRadioComponentData}/>
      {/* <RadioComponent question={"What is your shirt size?"} name={"shirtSize"} listOfNames={["SM","MD","LG", "XL"]}/>
      <RadioComponent question={"Do you have a laptop you can bring?\n(Unfortunately, we aren't able to provide laptops this year.)"} name={"laptop"} listOfNames={["Yes: Please bring it!","No"]}/> */}
    </div>
  </div>
  )

}
export default Register;