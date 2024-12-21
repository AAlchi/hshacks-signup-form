import React from 'react';

interface ButtonComponentProps {
  name: string;
  secondary?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  name,
  secondary,
  onClick,
  disabled
}) => {
  const handleSubmit = () => { 
    if (onClick) {
      onClick();
    }
    window.scrollTo(0, 0);
  };
  

  return (
    <button onClick={handleSubmit} type="submit" className={`${secondary ? "bg-slate-500" : "bg-blue-500"} ${disabled && "opacity-50 cursor-block"} w-full text-white p-2 rounded hover:opacity-50 transition px-4`}>
      {name}
    </button>
  );
};

export default ButtonComponent;
