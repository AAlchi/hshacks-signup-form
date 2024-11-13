import React from 'react';

interface ButtonComponentProps {
  responses: { [key: string]: string };
  onClick: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  responses,
  onClick,
}) => {
  const handleSubmit = () => {
    console.log('Submitted Responses:', responses);
    onClick
  };


  return (
    <button onClick={onClick} className="bg-blue-500 text-white p-2 rounded hover:opacity-50 transition px-4">
      Submit
    </button>
  );
};

export default ButtonComponent;
