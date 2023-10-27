/* eslint-disable react/prop-types */
const ChangeScreenBtn = ({title, mainTitle, onclickFunction}) => {
  return (
        <div className="flex flex-col gap-3 justify-center items-center">
            <div className="font-medium text-xl ">
                {mainTitle}
            </div>
            <div className="text-white px-8 p-2 border-2 text-xl font-medium rounded-xl text-center w-48 cursor-pointer duration-300 hover:scale-105" onClick={onclickFunction}>{title}</div>
        </div>
    )
}

export default ChangeScreenBtn