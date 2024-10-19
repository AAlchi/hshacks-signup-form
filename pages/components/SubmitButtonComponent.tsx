import React from 'react';

interface SubmitButtonComponentProps {
  responses: { [key: string]: string };
}

const SubmitButtonComponent: React.FC<SubmitButtonComponentProps> = ({
  responses,
}) => {
  const handleSubmit = () => {
    console.log('Submitted Responses:', responses);
    
  };

  return (
    <button 
      onClick={handleSubmit} 
      className="bg-blue-500 text-white p-2 rounded"
    >
      Submit
    </button>
  );
};

export default SubmitButtonComponent;
