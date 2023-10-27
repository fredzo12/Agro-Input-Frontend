/* eslint-disable react/prop-types */

const SubmitButton = ({text, onclickFunction}) => {
  return (
    <div className="p-2 px-5 rounded-md bg-blue-700 hover:bg-blue-800  text-white font-semibold cursor-pointer" onClick={onclickFunction}>{text}</div>
  )
}

export default SubmitButton