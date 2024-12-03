import React, { useState } from 'react';
import { useEffect } from 'react';

interface RadioComponentInterface {
  name: string;
  listOfNames: string[];
  question: string;
  subtext?: string;
  radioAnswer: (radioData: string) => void;
}

const RadioComponent: React.FC<RadioComponentInterface> = ({
  name,
  listOfNames,
  question,
  subtext,
  radioAnswer
}) => {
  const [boxChecked, setBoxChecked] = useState("");

  

  useEffect(() => {
    if (boxChecked) {
      radioAnswer(`${boxChecked}`);
    }
  }, [boxChecked]);
  

  

  return (
    <div className='w-full'>
      <div className='mb-3'>
        <p className="text-black font-bold">
          {question}
        </p> 
        {subtext && <p className='text-slate-500 text-sm'>{subtext}</p>}     
      </div>
      <div className="grid grid-cols-2 gap-4 gap-x-16  text-black mb-5">
        {
          listOfNames.map((option, index) => (
            <div key={index} className="flex items-center">
              <input value={option} checked={option === boxChecked} name={name} type='radio' onChange={() => setBoxChecked(option)} className="mr-1"/>
              {option}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default RadioComponent;