
// eslint-disable-next-line react/prop-types
const ButtonWithIcon = ({title, icon , onclickFunction}) => {
  return (
    <div className="flex justify-center items-center gap-2 p-2 px-4 bg-blue-800 cursor-pointer text-white text-lg font-semibold rounded-md shadow-sm hover:bg-blue-900 hover:shadow-md duration-300" onClick={onclickFunction}> {icon}  {title}</div>
  )
}

export default ButtonWithIcon