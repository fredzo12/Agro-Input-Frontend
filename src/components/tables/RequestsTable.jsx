import { useDispatch, useSelector } from "react-redux"
import { farmerRequestListAsync } from "../../feature/request/FarmerRequestSlice"
import { useEffect } from "react"

const RequestsTable = () => {
    const dispatch = useDispatch()
    const { requestsList } = useSelector(
        (state)=> state.farmerRequest
    )
        useEffect(() => {
          dispatch(farmerRequestListAsync())
        }, [dispatch])
    return (
    <div className='p-2'>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Land Size</th>
                    <th>Fertilizer Quantity</th>
                    <th>Seed Quantity</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    requestsList.map((request, index) => (
                        <tr key={index}>
                            <td>{request.created_at}</td>
                            <td>{request.land_size}</td>
                            <td>{request.fertilizer_quantity}</td>
                            <td>{request.seed_quantity}</td>
                            <td>{request.status}</td>
                        </tr>
                    ))
                }
           
            </tbody>
        </table>
    </div>
  )
}

export default RequestsTable