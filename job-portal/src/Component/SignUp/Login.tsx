import { Button, LoadingOverlay, PasswordInput, TextInput } from "@mantine/core";
import { IconAt,  IconLock} from "@tabler/icons-react";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { loginValidation } from "../../Services/FormValidation";

import { useDisclosure } from "@mantine/hooks";
import ResetPassword from "./ResetPassword";
import { useDispatch } from "react-redux";
import { setUser } from "../../Slices/UserSlice";
import { errorNotification, successNotification } from "../../Services/Notification";
import { setJwt } from "../../Slices/JwtSlice";
import loginUser from "../../Services/AuthService";
import { jwtDecode } from "jwt-decode";


const Login =()=>{

  const [loading,setLoading]=useState(false);
  const dispatch =useDispatch();
  const form={
  email:"",
  password:"",
}

  const [data,setData] =useState<{[key:string]:string}>(form);
   const [formError,setFormError]=useState<{[key:string]:string}>(form);
   const naviagte=useNavigate();
   const [opened,{open,close}] =useDisclosure(false);

    const handleChange=(event:any)=>{
      setFormError({...formError,[event.target.name]:""});
         setData({...data,[event.target.name]:event.target.value})
    }
  
    const handleSubmit=()=>{
      let valid=true, 
    newFormError:{[key:string]:string}={};
    for(let key in data){
     
     newFormError[key]=loginValidation(key,data[key]);
      if(newFormError[key])valid=false;
    }
    setFormError(newFormError);
    if(valid){
         setLoading(true);
           loginUser(data).then((res)=>{
             successNotification("Login Successful","Redirecting to home page...");
          dispatch(setJwt(res.jwt));
          const decoded= jwtDecode(res.jwt);
         dispatch(setUser({...decoded,email:decoded.sub}));
        setTimeout(()=>{
          setLoading(false);
           naviagte("/");
        }, 4000)
      }).catch((err)=>{
        setLoading(false);
      console.log(err);
      errorNotification("Login Failed",err.reponse?.data.errorMessage);
    }) ;   
    }    
    }
 return <> <LoadingOverlay className="!fixed" visible={loading} zIndex={1000} overlayProps={{ radius: "sm",color:"eucalyptus.4" , blur: 2 }} />
  <div className="w-1/2 sm-mx:w-full flex flex-col justify-center px-20 gap-3 bs-mx:px-10 md-mx:px-5 ">
    <div className="text-2xl font-semibold">Login Account</div>
      
      <TextInput withAsterisk value={data.email} error={formError.email} name="email" onChange={handleChange} className="[&_input]:bg-shiraz-800  [&_input]:placeholder-mine-shaft-300" leftSection={<IconAt className="text-shiraz-200" size={16} />} label="Email" placeholder="Your email" /> 
      <PasswordInput withAsterisk value={data.password} error={formError.password} name="password" onChange={handleChange} className=" [&_input]:bg-mine-shaft-950  [&_input]:placeholder-mine-shaft-300" leftSection={<IconLock className="text-shiraz-200" size={18} stroke={1.5}/>} label="Password" placeholder="Password" /> 
      <Button loading={loading} onClick={handleSubmit} color="eucalyptus.4" variant="filled">Login</Button>
      <div className="mx-auto ">Don't have an account ?<span className="text-eucalyptus-400 hover:underline cursor-pointer" onClick={()=>{naviagte("/sign-up"); setFormError(form);  setData(form)}} > Sign Up</span></div>
      <div onClick={open} className="text-eucalyptus-400 hover:underline cursor-pointer text-center">Forget Password</div>
 </div>
 <ResetPassword opened={opened} close={close} />
 </>
}
export default Login;