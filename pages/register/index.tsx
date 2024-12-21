import RadioComponent from "../components/RadioComponent/RadioComponent";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'; 
import TextFieldComponent from "../components/TextFieldComponent/TextFieldComponent"; 
import TimeBoxComponent from "../components/TimeBoxComponent/TimeBoxComponent";
import LoadingComponent from "../components/LoadingComponent/LoadingComponent"; 
import ButtonComponent from "../components/buttonComponent/ButtonComponent"; 
import InformationComponent from "./InformationComponent";
import axios from "axios";
import { toast } from "react-toastify";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  isLaptopAvailable: boolean;
  experience: string;
  grade: string;
  shirtSize: string;
  dietaryRestrictions: string;
  otherInformation: string;
}


const Register = () => {
  const router = useRouter(); 
  const [step, setStep] = useState(0); 
  const [formData, setFormData] = useState<FormData>({
    "firstName": "",
    "lastName": "",
    "email": "",
    "isLaptopAvailable": false,
    "experience": "",
    "grade": "",
    "shirtSize": "",
    "dietaryRestrictions": "",
    "otherInformation": ""
  });
  const [formFields, setFormFields] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFormFields = async () => {
      try {
        const response = await axios.get('/api/registrationFields');
        setFormFields(response.data);
        setIsLoading(false);
      } catch (error) { 
        toast.error('There was an error, please try again later.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light", 
          });
      }
    };

    fetchFormFields();
  }, []);

  const redirect = () => {
    router.push("./RegistrationComplete");
  }; 
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;  
 
    setFormData((prevFormData) => ({
      ...prevFormData,  
      [name]: value  
    }));

    
  }; 

  const nextStep = (e: any) => {
    e.preventDefault();
    
    if (step < 3) {
      setStep(step + 1)
    } else {
      redirect()
    }
  }

  return (
      <div className="flex items-center justify-center bg-none relative py-10" style={{overflow: "hidden"}}>
      <div className="bg-white flex flex-col rounded w-[600px] p-6 mt-[85px] relative">
        <div className="flex items-center justify-start">
          <img style={{ width: "200px" }} src="./HSHacks_Logo.png" alt="HSHacks_Logo" />
          <p className="text-2xl pl-2 text-black">| Registration</p>
        </div>   
          <InformationComponent name="General Information" />
          {!isLoading ? ( 
              <form onSubmit={nextStep}>
                {formFields.map((data: any) => ( 
                  <div key={data.props.name}>
                    {data.component == "TextFieldComponent" && data.group == step && (
                      <TextFieldComponent required={data.required} name={data.props.name} placeHolder={data.props.placeHolder} question={data.props.question} onChange={(e) => handleInputChange(e)} type={data.type} value={formData[data.props.name as keyof FormData]} />
                    )}
                    {data.component == "RadioComponent" && data.group == step && (
                      <RadioComponent required={data.required} name={data.props.name} listOfNames={data.props.listOfNames} question={data.props.question} onChange={(e) => handleInputChange(e)} chosenElement={formData[data.props.name as keyof FormData]} />
                    )}
                  </div>
                ))}
                {step == 0 ? (
                  <ButtonComponent name="Next" />
                ) : step < 2 ? (
                  <div className="flex w-full gap-2">
                    <ButtonComponent name="Back" secondary onClick={() => setStep(step - 1)} />
                    <ButtonComponent name="Next" />
                  </div>
                ) : (
                  <div className="flex w-full gap-2">
                    <ButtonComponent name="Back" secondary onClick={() => setStep(step - 1)}/>
                    <ButtonComponent name="Submit" />
                  </div>
                )}
              </form>  
          ) : (
            <LoadingComponent />
          )}
           
      </div>
      <div className="invisible lg:visible absolute bottom-3 right-3"><TimeBoxComponent /></div>


    </div> 
  )

}
export default Register;