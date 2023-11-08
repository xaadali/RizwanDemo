export const AlertComp = ({ name, bgColor, textColor, alertIcon }) => (
  // <div className="fixed">
  <div className={`${bgColor} ${textColor} absolute z-30 left-1/2 transform -translate-x-1/2 top-10  flex items-center w-full max-w-xs p-4 mb-4 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800`} role="alert">
    <div className="animate-fade-in-down inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
      { alertIcon }
    </div>
    <div className="animate-fade-in-down ml-1 text-normal font-normal">{name}</div>
  </div>
  // {/* </div> */}

)