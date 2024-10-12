import React, { useState } from 'react';
import { useEffect } from 'react';

interface TextFieldComponentInterface {
  name: string;
  placeHolder: string;
  type: string;
  question: string;
  textFieldAnswer: (textFieldData: string) => void;
}

const TextFieldComponent: React.FC<TextFieldComponentInterface> = ({
  name,
  placeHolder,
  type,
  question,
  textFieldAnswer
}) => {
  const [textEntered, setTextEntered] = useState("");
  const [tempInput, setTempInput] = useState("");

  

  useEffect(() => {
    if (textEntered !== "") {
      textFieldAnswer(`${textEntered}`);
    }
  }, [textEntered, textFieldAnswer]);
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTextEntered(tempInput);
    }
  };
  

  return (
    <div className='w-full'>
      <p className="text-black font-bold mb-3">
        {question}
      </p> 
      <div className="text-black mb-5">
        {
          
            <div className="flex items-center">
              <input value={tempInput} name={name} placeholder={placeHolder} type={type} onChange={(e) => setTempInput(e.target.value)} onKeyDown={handleKeyDown} className="mr-1 border-2 bg-slate-100 border-gray-400 rounded p-1"/>
              
            </div>
          
        }
      </div>
    </div>
  );
}

export default TextFieldComponent;