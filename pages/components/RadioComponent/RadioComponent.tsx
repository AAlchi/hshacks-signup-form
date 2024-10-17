import React, { useState } from 'react';
import { useEffect } from 'react';

interface RadioComponentInterface {
  name: string;
  listOfNames: string[];
  question: string;
  radioAnswer: (radioData: string) => void;
}

const RadioComponent: React.FC<RadioComponentInterface> = ({
  name,
  listOfNames,
  question,
  radioAnswer
}) => {
  const [boxChecked, setBoxChecked] = useState("");

  

  useEffect(() => {
    if (boxChecked) {
      radioAnswer(`${boxChecked}`);
    }
  }, [boxChecked, radioAnswer]);
  

  

  return (
    <div className='w-full'>
      <p className="text-black font-bold mb-3">
        {question}
      </p> 
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