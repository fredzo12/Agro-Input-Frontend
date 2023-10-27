// eslint-disable-next-line react/prop-types
const TableHeaderFilter = ({title}) => {
  return (
    <div className="p-2 flex justify-between items-center ">
        <p className="text-xl font-medium">{title}</p>
        {/* <ButtonWithIcon title={buttonTitle} icon={buttonIcon} onclickFunction={buttonOnclick}/> */}
        <div className="flex filters  ">
            <p className="rounded-l-md active">ALL</p>
            <p>PENDING</p>
            <p>APPROVED</p>
            <p  className="rounded-r-md">DECLINED</p>
        </div>
    </div>
  )
}
export default TableHeaderFilter