import React, { useState } from 'react';
import { useEffect } from 'react';

interface TextFieldComponentInterface {
  name: string;
  placeHolder: string;
  type: string;
  question: string;
  subtext?: string;
  textFieldAnswer: (textFieldData: string) => void;
}

const TextFieldComponent: React.FC<TextFieldComponentInterface> = ({
  name,
  placeHolder,
  type,
  question,
  subtext,
  textFieldAnswer
}) => {
  const [textEntered, setTextEntered] = useState("");

  

  useEffect(() => {
    if (textEntered !== "") {
      textFieldAnswer(`${textEntered}`);
    }
  }, [textEntered]);
  
  
  

  return (
    <div className='w-full'>
      <div className='mb-3'>
        <p className="text-black font-bold">
          {question}
        </p> 
        {subtext && <p className='text-slate-500 text-sm'>{subtext}</p>}     
      </div>
      <div className="text-black mb-5">
        { 
            <div className="flex flex-col items-center">
              <input value={textEntered} name={name} placeholder={placeHolder} type={type} onChange={(e) => setTextEntered(e.target.value)} className="border-2 bg-slate-100 border-gray-400 w-full rounded pl-2 py-1"/>     
            </div> 
        }
      </div>
    </div>
  );
}

export default TextFieldComponent;
