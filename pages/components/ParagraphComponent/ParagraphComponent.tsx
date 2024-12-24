import React, { useState } from 'react';
import { useEffect } from 'react';

interface ParagraphComponentInterface {
  name: string;
  placeHolder: string; 
  question: string;
  subtext?: string;
  value: any;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ParagraphComponent: React.FC<ParagraphComponentInterface> = ({
  name,
  placeHolder, 
  question,
  subtext,
  value,
  required,
  onChange
}) => {  
  return (
    <div className='w-full'>
      <div className='mb-3'>
        <div className="text-black flex gap-1 font-bold">
          {question} 
          {required && (
            <p title="This field is required" style={{color: "red"}}>
              *
            </p>
          )}
        </div> 
        {subtext && <p className='text-slate-500 text-sm'>{subtext}</p>}     
      </div>
      <div className="text-black mb-5">
        { 
            <div className="flex flex-col items-end">
              <textarea maxLength={400} required={required} name={name} value={value} placeholder={placeHolder} onChange={onChange} className="border-2 bg-slate-100 border-gray-400 w-full rounded pl-2 py-1"/>     
              <p className='pt-1 text-sm text-slate-500'>Maximum of 400 Characters</p>
            </div> 
        }
      </div>
    </div>
  );
} 

export default ParagraphComponent;
