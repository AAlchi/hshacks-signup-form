import RadioComponent from "../components/RadioComponent/RadioComponent";
import React, { useState } from "react";
import TextFieldComponent from "../components/TextFieldComponent/TextFieldComponent";
import SubmitButtonComponent from "../components/SubmitButtonComponent";
import TimeBoxComponent from "../components/TimeBoxComponent/TimeBoxComponent";

const Register = () => {

  // const [data, setData] = useState([]); 

  const handleRadioComponentData = (questionId: string, radioData: string) => { 
    setResponses(prev => ({ ...prev, [questionId]: radioData }));
    console.log(radioData);
     
  };
  const handleTextFieldComponentData = (questionId: string, textFieldData: string) => { 
    setResponses(prev => ({ ...prev, [questionId]: textFieldData }));
    console.log(textFieldData); 
  };
  const [responses, setResponses] = useState<{ [key: string]: string }>({});

  return(
    <div className="flex items-center justify-center bg-none relative">
      <div className="bg-white flex flex-col items-center lg:inline-block rounded w-[600px] p-6 mt-[85px] relative">
        <div className="visible lg:invisible absolute top-4"><TimeBoxComponent/></div>
        <div className="my-6 lg:m-0"></div>
        {/* <TextFieldComponent placeHolder="First Name" name="name" question="What is your name?" type="text" textFieldAnswer={(textFieldData) => handleTextFieldComponentData("firstName", textFieldData)}/>
        <RadioComponent question={"What grade are you in?"} name={"grade"} listOfNames={["9","10","11", "12"]} radioAnswer={(radioData) => handleRadioComponentData("grade", radioData)}/>
        <RadioComponent question={"What is your shirt size?"} name={"shirtSize"} listOfNames={["SM","MD","LG", "XL"]} radioAnswer={(radioData) => handleRadioComponentData("shirtSize", radioData)}/>
        <RadioComponent question={"Do you have a laptop you can bring?\n(Unfortunately, we aren't able to provide laptops this year.)"} name={"laptop"} listOfNames={["Yes: Please bring it!","No"]} radioAnswer={(radioData) => handleRadioComponentData("laptop", radioData)}/>
        <TextFieldComponent placeHolder="Email" name="email" question="Email: " type="email" textFieldAnswer={(textFieldData) => handleTextFieldComponentData("email", textFieldData)}/> */}
        <SubmitButtonComponent responses={responses} />

      </div>
      <div className="invisible lg:visible absolute bottom-0 right-0"><TimeBoxComponent/></div>
      

    </div>
  )

}
export default Register;