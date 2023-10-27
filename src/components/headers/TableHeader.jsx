import ButtonWithIcon from "../buttons/ButtonWithIcon"

// eslint-disable-next-line react/prop-types
const TableHeader = ({title, buttonTitle, buttonIcon, buttonOnclick}) => {
  return (
    <div className="p-2 flex justify-between items-center ">
        <p className="text-xl font-medium">{title}</p>
        <ButtonWithIcon title={buttonTitle} icon={buttonIcon} onclickFunction={buttonOnclick}/>
    </div>
  )
}
export default TableHeader