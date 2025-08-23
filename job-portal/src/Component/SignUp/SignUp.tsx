import { Anchor, Button, Checkbox, Group, LoadingOverlay, PasswordInput, Radio, TextInput } from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../Services/UserService";
import { signupValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";
import { errorNotification, successNotification } from "../../Services/Notification";

const form={
  name:"",
  email:"",
  password:"",
  confirmPassword:"",
  accountType:"APPLICANT",
}


const SignUp =()=>{
 
  const [loading,setLoading]=useState(false);
  const [data,setData] =useState<{[key:string]:string}>(form);
   const [formError,setFormError]=useState<{[key:string]:string}>(form);
   const naviagte=useNavigate();

  const handleChange=(event:any)=>{
   
            if(typeof(event)=="string"){
              setData({...data,accountType:event});
              return ;
            }
            let name=event.target.name,
            value=event.target.value;
           setData({...data,[name]:value});
           setFormError({...formError,[name]:signupValidation(name,value)})
            if(name === "password" && data.confirmPassword!==""){
              let err="";
              if(data.confirmPassword!==value) err="Passwords do not match.";
               setFormError({...formError,[name]:signupValidation(name,value),confirmPassword:err});
            }
           if(name==="confirmPassword"){
            if(data.password!==value)setFormError({...formError,[name]:"Passwords do not match."})
              else setFormError({...formError,confirmPassword : ""});
           }
  }

  const handleSubmit=()=>{
    let valid=true, 
    newFormError:{[key:string]:string}={};
    for(let key in data){
      if(key==="accountType")continue;
      if(key!=="confirmPassword")newFormError[key]=signupValidation(key,data[key]);
      else if(data[key]!==data["password"])newFormError[key]="Passwords do not match.";
      if(newFormError[key])valid=false;
    }
    setFormError(newFormError);
 
    if(valid===true){
       setLoading(true);
        registerUser(data).then((res)=>{
           console.log(res);
          setData(form);
        successNotification("Registration Successfully","Redirecting to login page...");
        setTimeout(()=>{
           setLoading(false);
           naviagte("/login");
        }, 4000)
    }).catch((err)=>{
       setLoading(false);
      console.log(err);
      errorNotification("Registration Failed",err.response?.data.errorMessage);
    });
    }
  }



 return <>  <LoadingOverlay className="!fixed translate-x-1/2" visible={loading} zIndex={1000} overlayProps={{ radius: "sm",color:"eucalyptus.4" , blur: 2 }} />
  <div className="  w-1/2 sm-mx:py-20 sm-mx:w-full flex flex-col justify-center px-20 gap-3 bs-mx:px-10 md-mx:px-5 ">
    <div className="text-2xl font-semibold">Create Account</div>
      <TextInput withAsterisk error={formError.name} value={data.name} name="name" onChange={handleChange} className=" [&_input]:placeholder-mine-shaft-400" label="Full Name"  placeholder="Your name"/>
      <TextInput withAsterisk error={formError.email} value={data.email} name="email" onChange={handleChange} className="  [&_input]:placeholder-mine-shaft-400" leftSection={<IconAt className="text-mine-shaft-300" size={16} />} label="Email" placeholder="Your email" /> 
      <PasswordInput withAsterisk error={formError.password} value={data.password} name="password" onChange={handleChange} className=" [&_input]:placeholder-mine-shaft-400" leftSection={<IconLock className="text-mine-shaft-300" size={18} stroke={1.5}/>} label="Password" placeholder="Password" /> 
      <PasswordInput withAsterisk  error={formError.confirmPassword} value={data.confirmPassword} name="confirmPassword" onChange={handleChange} className=" [&_input]:placeholder-mine-shaft-400" leftSection={<IconLock className="text-mine-shaft-300" size={18} stroke={1.5}/>} label="Confirm Password" placeholder="Confirm Password" /> 
      <Radio.Group
      value={data.accountType}
      onChange={handleChange}
      label="You are?"
      withAsterisk
    ><div className="flex gap-6 xs-mx:gap-3">
      <Group mt="xs>">
      <Radio className="py-4 px-6 sm-mx:px-4 sm-mx:py-2 border [&_input]:bg-mine-shaft-950 [&_input]:border-mine-shaft-200 has-[:checked]:border-eucalyptus-300 has-[:checked]:bg-eucalyptus-400/20 hover:bg-mine-shaft-800 border-bg-mine-shaft-700 rounded-lg"  value="APPLICANT" label="Applicant" />
      <Radio className="py-4 px-6 sm-mx:px-4 sm-mx:py-2 border [&_input]:bg-mine-shaft-950 [&_input]:border-mine-shaft-200 has-[:checked]:border-eucalyptus-300 has-[:checked]:bg-eucalyptus-400/20 hover:bg-mine-shaft-800 border-bg-mine-shaft-700 rounded-lg" value="EMPLOYER" label="Employer" />
      </Group>
      </div>
    </Radio.Group>
      <Checkbox className="[&_input]:bg-mine-shaft-950 [&_input]:border-eucalyptus-400" label={<>I accept{' '}<Anchor>terms & condition</Anchor></>} /> 
      <Button loading={loading} onClick={handleSubmit} color="eucalyptus.4" variant="filled">Sign Up</Button>
      <div className="mx-auto ">Have an account ? <span className="text-eucalyptus-400 hover:underline cursor-pointer"onClick={()=>{naviagte("/login"); setFormError(form);  setData(form)}} >Login</span></div>
 </div> </>
}
export default SignUp;