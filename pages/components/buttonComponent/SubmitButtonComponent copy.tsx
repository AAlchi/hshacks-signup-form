import React from 'react';

interface SubmitButtonComponentProps {
  responses: { [key: string]: string };
  onClick: () => void;
}

const SubmitButtonComponent: React.FC<SubmitButtonComponentProps> = ({
  responses,
  onClick,
}) => {
  const handleSubmit = () => {
    console.log('Submitted Responses:', responses);
    onClick();
  };
  

  return (
    <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded hover:opacity-50 transition px-4">
      Submit
    </button>
  );
};

export default SubmitButtonComponent;
