import ButtonWithIcon from "../buttons/ButtonWithIcon"
import InputWithIcon from "../inputs/InputWithIcon"
import {BiLogIn} from 'react-icons/bi'
import {AiOutlineNumber}  from 'react-icons/ai'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { farmerRequestAsync } from "../../feature/request/FarmerRequestSlice"

const MakeRequestForm = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        landSize:""
    })
    const [calculation, setCalculation] = useState({
        landSize: 0,
        fertilizeQuantity:0,
        seedQuantity:0,
    })
    const handleChange = (name, value) => {
        setFormData((prevFormData) => {
          const updatedFormData = { ...prevFormData, [name]: value };
          const updatedCalculation = {
            ...calculation,
            landSize: updatedFormData.landSize,
            seedQuantity:updatedFormData.landSize,
            fertilizeQuantity:updatedFormData.landSize * 3,
          };
          setCalculation(updatedCalculation);
          return updatedFormData;
        });
      };
    const handleRequestSubmit = async(e) => {
        e.preventDefault()
        try {
            const res = await dispatch(
                farmerRequestAsync({landSize:calculation.landSize, fertilizerQuantity:calculation.fertilizeQuantity,seedQuantity:calculation.seedQuantity})
            );
            if(res.type == "/create-request/fulfilled")
            {
                window.location.reload()
            }
        } catch (error) {
            console.log("error", error)
        }
    }

  return (
    <div  className="p-2 gap-4 flex flex-col sm:flex-row justify-between">
        <form action="" method="post" className="flex gap-3 h-[50px] justify-between  md:justify-start" onSubmit={handleRequestSubmit}>
            <div className="max-w-[300px] w-[500px] md:w-auto">
                <InputWithIcon 
                type={"number"} 
                placeholder={"Enter land size"} 
                icon={<AiOutlineNumber/>} 
                onChange={handleChange}
                value={formData.landSize}
                name="landSize"
                />
            </div>
            <ButtonWithIcon title={"Confirm Request"} icon={<BiLogIn/>} onclickFunction={handleRequestSubmit}/>
        </form>
        <div className="p-4 bg-slate-200 w-full md:w-[300px] rounded-md shadow-sm">
            <p className="font-medium"><span className=" text-slate-900">Land Size: </span><span>{calculation.landSize} Acre(s)</span></p>
            <p className="font-medium"><span className=" text-slate-900">Fertilize Quantity: </span><span>{calculation.fertilizeQuantity} Kg(s)</span></p>
            <p className="font-medium"><span className=" text-slate-900">Seed Quantity: </span><span>{calculation.seedQuantity} Kg(s)</span></p>
        </div>
    </div>
  )
}
export default MakeRequestForm