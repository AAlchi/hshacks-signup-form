const TimeBoxComponent = () => {
  return(
    <div className="bg-white border border-gray-400 lg:border-none flex flex-row text-black rounded-lg items-center max-w-[300px] min-w-[200px] px-[10px] py-[6px]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-500 size-6 mr-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
      <p>
        Registration closes 4/18
      </p>
    </div>
  )
}
export default TimeBoxComponent;