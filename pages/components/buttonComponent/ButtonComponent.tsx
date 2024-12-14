import React from 'react';

interface ButtonComponentProps {
  name: string;
  onClick: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  name,
  onClick,
}) => {
  const handleSubmit = () => { 
    onClick();
    window.scrollTo(0, 0);
  };
  

  return (
    <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded hover:opacity-50 transition px-4">
      {name}
    </button>
  );
};

export default ButtonComponent;
