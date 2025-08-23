import { Button, Modal, PasswordInput, PinInput, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { changePass, sendOtp, verifyOtp } from "../../Services/UserService";
import { signupValidation } from "../../Services/FormValidation";
import { errorNotification, successNotification } from "../../Services/Notification";
import { useInterval } from "@mantine/hooks";


const ResetPassword = (props:any) =>{
    const [email,setEmail]= useState("");
    const [otpSent,setOtpSent]=useState(false);
    const [otpSending,setOtpSending]=useState(false);
    const[verified,setVerified]=useState(false);
    const[password,setPassword]=useState("");
    const[passErr,setPassErr]=useState("");
    const[resendLoader ,setResendLoader]=useState(false); 
    const[seconds,setSeconds]=useState(60);
    const interval = useInterval(()=>{
        if(seconds===0){
            setResendLoader(false);
            setSeconds(60);
            interval.stop();

        }else
        setSeconds((s)=>s-1)
    },1000);

   
    const handleVerifyOtp=(otp:string)=>{
           verifyOtp(email,otp).then((res)=>{
            console.log(res);
            successNotification("OTP VErified","Enter new password.");
            setVerified(true);
           }).catch((err)=>{
            console.log(err);
            errorNotification("OTP verification Failed", err.reponse.data.errorMessage);
           })
    }

    const handleResetPassword=()=>{
        changePass(email,password).then((res)=>{
            console.log(res);
            successNotification("Password Changed" ,"Login with new password.")
            props.close();
        }).catch((err)=>{
            console.log(err);
            errorNotification("Password Reset Failed",err.response.data.errorMessage);
        })
    }

    const resendOtp=()=>{
        if(resendLoader)return;
         handleSendOtp();
    }

    const changeEmail=()=>{
       setOtpSent(false);
       setResendLoader(false);
       setSeconds(60);
       setVerified(false);
       interval.stop();
    }
    const handleSendOtp=()=>{ 
        setOtpSending(true)
        sendOtp(email).then((res)=>{
            console.log(res)
            successNotification("Otp Sent Successfully", "Enter OTP to reset.");
            setOtpSent(true);
            setOtpSending(false);
            setResendLoader(true);
            interval.start();
        }).catch((err)=>{
            console.log(err);
            setOtpSending(false);
            errorNotification("OTP sending Failed",err.response.data.errorMessage);
        })
    }
    return <Modal opened={props.opened} onClose={props.close} title="Reset Password" >
         <div className="flex flex-col gap-3">
              <TextInput withAsterisk value={email} size="md"  onChange={(e)=>setEmail(e.target.value)} className="[&_input]:bg-shiraz-800 [&_input]:border-frangipani-300 [&_input]:placeholder-shiraz-200" leftSection={<IconAt className="text-shiraz-200" size={16} />} label="Email" placeholder="Your email"
              rightSection={<Button loading={otpSending && !otpSent} size="xs" className="mr-1 [&_input]:bg-frangipani-300" onClick={handleSendOtp} color="frangipani.4" disabled={email==="" || otpSent} variant="filled">Login</Button>} rightSectionWidth="xl" /> 
              {otpSent && <PinInput length={6} className="mx-auto" size="md" gap="lg" type="number" onComplete={handleVerifyOtp}/>}
              {otpSent && !verified &&
                 <div className=" flex gap-2">
                    <Button fullWidth loading={otpSending} color="frangipani.3" className=" [&_input]:bg-frangipani-300" onClick={resendOtp}   variant="light">{resendLoader?seconds:"Resend"}</Button>
                    <Button fullWidth loading={otpSending} className=" [&_input]:bg-frangipani-300" onClick={changeEmail} color="frangipani.4" variant="filled">Change Email</Button>
                 </div>
              }
              {
                verified && <PasswordInput withAsterisk value={password} error={passErr} name="password" onChange={(e)=>{setPassword(e.target.value); setPassErr(signupValidation("password" , e.target.value))}} className=" [&_input]:bg-shiraz-800 [&_input]:placeholder-shiraz-200" leftSection={<IconLock className="text-shiraz-200" size={18} stroke={1.5}/>} label="Password" placeholder="Password" />
                 }          

                 {
                    verified && <Button onClick={handleResetPassword} autoContrast variant="filled" >Change Password</Button>
                 }
                
         </div>
    </Modal>
}

export default ResetPassword;