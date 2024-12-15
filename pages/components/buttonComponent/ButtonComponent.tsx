import React from 'react';

interface ButtonComponentProps {
  name: string;
  secondary?: boolean;
  onClick: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  name,
  secondary,
  onClick,
}) => {
  const handleSubmit = () => { 
    onClick();
    window.scrollTo(0, 0);
  };
  

  return (
    <button onClick={handleSubmit} className={`${secondary ? "bg-slate-500" : "bg-blue-500"} w-full text-white p-2 rounded hover:opacity-50 transition px-4`}>
      {name}
    </button>
  );
};

export default ButtonComponent;
