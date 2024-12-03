  import RadioComponent from "../components/RadioComponent/RadioComponent";
  import React, { useState } from "react";
  import { useRouter } from 'next/router';
  
  import TextFieldComponent from "../components/TextFieldComponent/TextFieldComponent";
  import SubmitButtonComponent from "../components/buttonComponent/SubmitButtonComponent";
  import TimeBoxComponent from "../components/TimeBoxComponent/TimeBoxComponent";
  import LoadingComponent from "../components/LoadingComponent/LoadingComponent";
  import RegistrationComplete from "../RegistrationComplete";
          
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
    const router = useRouter();
    const redirect = () => {
      router.push("./RegistrationComplete");
  };
  



    return(
        <div className="flex items-center justify-center bg-none relative py-10"> 
        <div className="bg-white flex flex-col items-center lg:inline-block rounded w-[600px] p-6 mt-[85px] relative">
          <div className="flex items-center justify-start">
            <img style={{width: "200px"}} src="./HSHacks_Logo.png" alt="HSHacks_Logo" />
            <p className="text-2xl pl-2 text-black">| Registration</p>
          </div>
          <div className="visible lg:invisible absolute top-4"><TimeBoxComponent/></div>
          <div className="my-6 lg:m-0"></div>
          <div className="flex gap-1">
            <TextFieldComponent placeHolder="John" name="firstName" question="First Name" type="text" textFieldAnswer={(textFieldData) => handleTextFieldComponentData("firstName", textFieldData)}/>
            <TextFieldComponent placeHolder="Doe" name="lastName" question="Last Name" type="text" textFieldAnswer={(textFieldData) => handleTextFieldComponentData("firstName", textFieldData)}/>
          </div>
          <TextFieldComponent placeHolder="john.doe@gmail.com" name="email" question="Email" type="email" textFieldAnswer={(textFieldData) => handleTextFieldComponentData("firstName", textFieldData)}/>
          <RadioComponent question={"Do You Have A Laptop You Can Bring?"} subtext="Unfortunately, we aren’t able to provide laptops this year." name="isLaptopAvailable" listOfNames={["Yes: Please bring it!","No"]} radioAnswer={(radioData) => handleRadioComponentData("grade", radioData)}/>
          <TextFieldComponent placeHolder="AP Computer Science A, etc." subtext="This doesn't make a difference! Just for us to know. You can participate regardless of experience level." name="experience" question="What's Your Experience Level In Programming?" type="text" textFieldAnswer={(textFieldData) => handleTextFieldComponentData("firstName", textFieldData)}/> 
          <RadioComponent question={"Grade Level"} name="gradeLevel" listOfNames={["9","10","11", "12"]} radioAnswer={(radioData) => handleRadioComponentData("grade", radioData)}/>
          <RadioComponent question={"T-Shirt Size?"} name={"shirtSize"} listOfNames={["SM","MD","LG", "XL"]} radioAnswer={(radioData) => handleRadioComponentData("shirtSize", radioData)}/>
          <TextFieldComponent placeHolder="Peanuts, gluten, lactose" name="dietaryRestrictions" question="Dietary Restrictions" type="text" textFieldAnswer={(textFieldData) => handleTextFieldComponentData("email", textFieldData)}/>
          <TextFieldComponent placeHolder="Lorem ipsum dolor sit amet." name="anythingElse" question="Anything Else We Should Know?" type="text" textFieldAnswer={(textFieldData) => handleTextFieldComponentData("email", textFieldData)}/>
          <SubmitButtonComponent responses={responses} onClick={redirect}/>
        </div>
        <div className="invisible lg:visible absolute bottom-0 right-0"><TimeBoxComponent/></div>
        

      </div>
    )

  }
  export default Register;