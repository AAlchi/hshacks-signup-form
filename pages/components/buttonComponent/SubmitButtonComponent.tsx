import React from 'react';

interface ButtonComponentProps {
  responses: { [key: string]: string };
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  responses,
}) => {
  const handleSubmit = () => {
    console.log('Submitted Responses:', responses);
    
  };

  return (
    <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded hover:opacity-50 transition px-4">
      Submit
    </button>
  );
};

export default ButtonComponent;
