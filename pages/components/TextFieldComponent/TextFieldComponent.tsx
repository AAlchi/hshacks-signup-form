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

  

  useEffect(() => {
    if (textEntered !== "") {
      textFieldAnswer(`${textEntered}`);
    }
  }, [textEntered, textFieldAnswer]);
  
  
  

  return (
    <div className='w-full'>
      <p className="text-black font-bold mb-3">
        {question}
      </p> 
      <div className="text-black mb-5">
        {
          
            <div className="flex items-center">
              <input value={textEntered} name={name} placeholder={placeHolder} type={type} onChange={(e) => setTextEntered(e.target.value)} className="mr-1 border-2 bg-slate-100 border-gray-400 rounded p-1"/>
              
            </div>
          
        }
      </div>
    </div>
  );
}

export default TextFieldComponent;
