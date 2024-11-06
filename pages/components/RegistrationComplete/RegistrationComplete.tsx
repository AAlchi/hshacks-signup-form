import React from "react";


const RegistrationComplete = () => {
  return(
    <div className="h-screen flex items-center justify-center bg-none">
      <div className="flex flex-col items-center justify-center bg-white rounded w-[600px] px-6 py-10 mx-5 text-black">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

        <p className="text-center font-bold">
          Registration Complete!
        </p>
        <p className="text-gray-400">
          You'll receive a confirmation email shortly.
        </p>


      </div>
    </div>
  )
}
export default RegistrationComplete;