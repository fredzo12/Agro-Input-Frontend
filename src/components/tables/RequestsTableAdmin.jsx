import { useDispatch, useSelector } from "react-redux"
import { farmerRequestApproveAsync, farmerRequestDeclineAsync, farmerRequestListAsync } from "../../feature/request/FarmerRequestSlice"
import { useEffect, useState } from "react"
import {AiOutlineClose} from "react-icons/ai"
import {TiTickOutline} from "react-icons/ti"
const RequestsTableAdmin = () => {
  const dispatch = useDispatch()
  const [status, setStatus] = useState("all")
  const handleApprove =async (id)=>{
    const res = await dispatch(farmerRequestApproveAsync(id))
    if(res.type == "/single-request/approve/fulfilled")
    {
        window.location.reload()
    }
  }
  const handleDecline = async(id)=>{
    const res = await dispatch(farmerRequestDeclineAsync(id))
    if(res.type == "/single-request/decline/fulfilled")
    {
        window.location.reload()
    }
  }
  const { requestsList } = useSelector((state)=> state.farmerRequest)
        useEffect(() => {
          dispatch(farmerRequestListAsync())
        }, [dispatch])

  const filteredResponse = status =="all"? requestsList: requestsList.filter(response => response.status == status)
    return (
      <>
        <div className="p-2 flex justify-between items-center ">
          <p className="text-xl font-medium">Farmers Requests</p>
          <div className="flex filters">
              <p className={`${status == "all"? "active": " "} rounded-l-md`} onClick={()=>setStatus("all")}>ALL</p>
              <p className={`${status == "PENDING"? "active": " "}`} onClick={()=>setStatus("PENDING")}>PENDING</p>
              <p className={`${status == "APPROVED"? "active": " "}`} onClick={()=>setStatus("APPROVED")}>APPROVED</p>
              <p className={`${status == "DECLINED"? "active": " "}`} onClick={()=>setStatus("DECLINED")}>DECLINED</p>
          </div>
        </div>
        <div className='p-2'>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Farmer</th>
                        <th>Land Size</th>
                        <th>Fertilizer Quantity</th>
                        <th>Seed Quantity</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredResponse.map((request, index) => (
                            <tr key={index}>
                                <td>{request.created_at}</td>
                                <td>{request.requester_name}</td>
                                <td>{request.land_size}</td>
                                <td>{request.fertilizer_quantity}</td>
                                <td>{request.seed_quantity}</td>
                                <td>{request.status}</td>
                                <td className="flex gap-2">
                                  {(request.status == "DECLINED" || request.status == "APPROVED") && (<>{request.status}</>)}
                                  {(request.status == "PENDING") && (<>
                                    <div className="p-2 bg-slate-300 rounded-md text-blue-700 cursor-pointer" onClick={()=>handleApprove(request.id)}>
                                      <TiTickOutline size={20}/>
                                    </div>
                                    <div className="p-2 bg-slate-300 rounded-md text-red-800 cursor-pointer" onClick={()=>handleDecline(request.id)}>
                                      <AiOutlineClose size={20}/>
                                    </div>
                                  </>)}
                                </td>
                            </tr>
                        ))
                    }
              
                </tbody>
            </table>
        </div>
      </>

  )
}

export default RequestsTableAdmin