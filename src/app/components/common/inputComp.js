export const InputComp = ({color, valueName, handleChange, placeholder, inputName, inputType, labelName , subject, page}) => (
  <>
    <label className="mb-4">
      <span className={`block font-normal text-[18px] text-light text-${color === 'white' ? 'white' : 'black300'}`}>{labelName}</span>
      <input
        type={inputType}
        name={inputName}
        value={valueName}
        onChange={handleChange}
        required
        placeholder={placeholder}
        className={`mt-1 block py-2 px-3 bg-white border border-inputBorder rounded-sm font-light text-[#5B5675] text-sm shadow-sm placeholder-inputPlaceholderText focus:outline-none focus:border-mustered600 focus:ring-1 focus:ring-mustered600 h-[47px] ${subject ? 'w-full' : page == 'contact' ? 'xl:w-[329px] w-full' : 'xl:w-[269px] w-full'}`}/>
    </label>
  </>
)

