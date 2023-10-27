import { useState } from "react"
import InputWithIcon from "../../components/inputs/InputWithIcon"
import {AiOutlinePhone,AiOutlineUser} from 'react-icons/ai'
import {PiPasswordDuotone} from 'react-icons/pi'
import SubmitButton from "../../components/buttons/SubmitButton"
import ChangeScreenBtn from "../../components/buttons/ChangeScreenBtn"
import { useDispatch } from "react-redux"
import { getOtpAsync, loginAsync, registerAsync } from "../../feature/account/AccountSlice"

const LoginRegisterIndex = () => {
  const [register, setRegister] = useState(false)
  const [token, setToken] = useState(false)
  const dispatch = useDispatch();

  // form states
  const [getTokenFormData, setGetTokenFormData] = useState({
    phoneNumber: "",
  });

  const [loginFormData, setLoginFormData] = useState({
    OTP:""
  })

  const [registerFormData, setRegisterFormData] = useState({
    firstName:"",
    lastName:"",
    phoneNumber:""
  })

  // onChange functions
  const handleGetTokenChange = (name, value) => {
    setGetTokenFormData({ ...getTokenFormData, [name]: value });
  };
  const handleLoginChange = (name, value)=> {
    setLoginFormData({...loginFormData, [name]:value})
  }

  const handleRegisterChange = (name, value)=> {
    setRegisterFormData({...registerFormData, [name]:value})
  }

// on submit functions
  const handleGetTokenSubmit =async (e)=> {
    e.preventDefault()
    try {
      const res = await dispatch(
        getOtpAsync({phoneNumber:getTokenFormData.phoneNumber })
      );
      if(res)
      {
        if(!res.payload.error)
        {
          setToken(true)
        }
      }
    } catch (error) {
      console.log("error", error)
    }
  }

  const handleLoginSubmit =async(e)=>{
    e.preventDefault()
    try {
      const res = await dispatch(
        loginAsync({phoneNumber:getTokenFormData.phoneNumber, otp:loginFormData.OTP})
      );
      if(res)
      {
        window.location.reload();
      }
    } catch (error) {
      console.log("error", error)
    }
  }

const handleRegisterSubmit = async(e) => {
  e.preventDefault()
  try {
    const res = await dispatch(
      registerAsync({
        firstName:registerFormData.firstName,
        lastName:registerFormData.lastName,
        phoneNumber:registerFormData.phoneNumber
      })
    );
    if(res.type == "/register/fulfilled")
    {
      setRegister(false)
    }
  } catch (error) {
    console.log("error",error)
  }
  

}
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-100">
      <div className="bg-white md:w-4/5 h:[200px] md:h-[500px] rounded-md flex flex-col md:flex-row shadow-md ">
        <div className="w-full md:w-1/2 md:h-full bg-white rounded-l-md p-10 md:p-20 flex flex-col justify-center ">
          <h1 className="font-semibold text-2xl py-2">Welcome to  Agro farmer</h1>
          <p className="py-2">Login or Register to access range of our services</p>
            {!register && (
              <>
              {!token && (
              <div>
                <form action="" className="flex flex-col gap-4" onSubmit={handleGetTokenSubmit}>

                    <InputWithIcon
                      placeholder="Phone number"
                      name="phoneNumber"
                      value={getTokenFormData.phoneNumber}
                      onChange={handleGetTokenChange}
                      icon={<AiOutlinePhone size={25} />}
                    />
                    
                    <div className="flex items-center gap-4 justify-start"> 
                        <SubmitButton text={"Get OTP"} onclickFunction={handleGetTokenSubmit} />
                    </div>
                </form>
              </div> 
              )}
              {token && (
              <div>
                <form action="" method="post" className="flex flex-col gap-4" onSubmit={handleLoginSubmit}>
                  <InputWithIcon 
                  placeholder={"OTP"} 
                  type={"number"} 
                  name={"OTP"}
                  value={loginFormData.OTP}
                  onChange={handleLoginChange}
                  icon={<PiPasswordDuotone size={25} />} />

                  <div className="flex items-center gap-4 justify-start py-2"> 
                    <SubmitButton text={"Login"} onclickFunction={handleLoginSubmit}/>
                  </div>
                </form>
              </div>
              )}
              </>
            )}
          {register && (
            <div>
               <form action="" method="post" className="flex flex-col gap-4" onSubmit={handleRegisterSubmit}>

                <InputWithIcon 
                placeholder={"First name"} 
                type={"text"} 
                name="firstName"
                onChange={handleRegisterChange}
                value={registerFormData.firstName}
                icon={<AiOutlineUser size={25} />} />

                <InputWithIcon 
                placeholder={"Last name"} 
                name="lastName"
                value={registerFormData.lastName}
                onChange={handleRegisterChange}
                type={"text"} 
                icon={<AiOutlineUser size={25} />} />

                <InputWithIcon 
                placeholder={"Phone number"} 
                type={"text"} 
                name="phoneNumber"
                value={registerFormData.phoneNumber}
                onChange={handleRegisterChange}
                icon={<AiOutlinePhone size={25}/>}/>

                <div className="flex items-center gap-4 justify-start"> 
                  <SubmitButton text={"Register"} onclickFunction={handleRegisterSubmit}/>
                </div>
               </form>
            </div>
          )
          }
        </div>
        <div className="w-full md:w-1/2 md:h-full bg-blue-400 rounded-r-md p-6 md:p-20 flex flex-col justify-center items-center">
            {/* register */}
            {!register && (<ChangeScreenBtn title={"Register"} mainTitle={"Don't have an account?"} onclickFunction={()=>setRegister(true)}/>)}
            {/* login  */}
            {register && (<ChangeScreenBtn title={"Login"} mainTitle={"Have an account?"}  onclickFunction={()=>setRegister(false)}/>)}
        </div>
      </div>
    </div>
  )
}

export default LoginRegisterIndex