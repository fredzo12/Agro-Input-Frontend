import { useState } from "react"
import TableHeader from "../../components/headers/TableHeader"
import UpBar from "../../components/sections/UpBar"
import {MdPlaylistAdd} from 'react-icons/md'
import {BiHide} from 'react-icons/bi'
import MakeRequestForm from "../../components/forms/MakeRequestForm"
import RequestsTable from "../../components/tables/RequestsTable"
import useSessionUser from "../../hooks/useSessionUser"
import RequestsTableAdmin from "../../components/tables/RequestsTableAdmin"

const DashboardIndex = () => {
  const user = useSessionUser()

const [showAddForm, setShowAddForm] = useState(false)  

  return (
    <div className="h-screen w-full bg-white ">
        <UpBar/>
        <div className="flex flex-col p-2 md:p-20">
          <div className="w-full bg-slate-100/70 p-2 md:p-10 rounded-md h-full">
            {user?.role == "farmer" && (
              <>
                <TableHeader title={"Recent Requests"} buttonTitle={`${showAddForm ? `Hide Form` : `New Request`} `} buttonIcon={showAddForm? <BiHide size={25}/>:<MdPlaylistAdd size={25}/> } buttonOnclick={()=>setShowAddForm(!showAddForm)}/>
                {showAddForm && (
                  <MakeRequestForm/>
                )}
                <RequestsTable/>
              </>
            )}
            {user?.role == "admin" && (<RequestsTableAdmin/>)}
          </div>
        </div>
    </div>
  )
}
export default DashboardIndex