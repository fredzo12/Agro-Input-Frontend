/* eslint-disable react/prop-types */

const CancelButton = ({text, onclickFunction}) => {
  return (
    <div className="p-2 px-5 rounded-md bg-slate-700  text-white font-semibold cursor-pointer hover:bg-slate-800" onClick={onclickFunction}>{text}</div>
  )
}

export default CancelButton