import useSessionUser from "../../hooks/useSessionUser"
import {AiOutlineLogout} from 'react-icons/ai'
const UpBar = () => {
const user = useSessionUser()
const logout = ()=>
{
    sessionStorage.clear()
    window.location.reload();
}
  return (

    <div className="p-2 md:px-20 bg-slate-100/80 w-full md:h-20 flex flex-row gap-3 justify-end items-center text-xl font-semibold shadow-sm">
        <div className="flex gap-3 bg-white p-4 rounded-3xl shadow-xs">
            <p className="text-slate-700">welcome:</p> 
            <p className="text-slate-900">{user?.firstName}, {user?.lastName}</p> 
        </div>
        <div className="flex items-center justify-center bg-slate-200 p-4 rounded-md cursor-pointer text-red-700 font-bold hover:bg-slate-300" onClick={()=>logout()}>
            <AiOutlineLogout className="rotate-90" size={23}/>
        </div>
    </div>
)
}

export default UpBar