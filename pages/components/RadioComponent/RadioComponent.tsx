import React, { useState } from 'react';
import { useEffect } from 'react';

interface RadioComponentInterface {
  name: string;
  listOfNames: string[];
  question: string;
  answer: (data: string) => void;
}

const RadioComponent: React.FC<RadioComponentInterface> = ({
  name,
  listOfNames,
  question,
  answer
}) => {
  const [boxChecked, setBoxChecked] = useState("");

  

  useEffect(() => {
    if (boxChecked) {
      answer(`${boxChecked}`);
    }
  }, [boxChecked, answer]);
  

  

  return (
    <div>
      <p className="text-black font-bold">
        {question}
      </p>
      
      
      <div className="grid grid-cols-2 gap-4 gap-x-16 w-[400px] text-black mb-5">
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