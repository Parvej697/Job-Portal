import { Button, PasswordInput, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Login =()=>{
 return <div className="w-1/2 flex flex-col justify-center px-20 gap-3">
    <div className="text-2xl font-semibold">Login Account</div>
      
      <TextInput withAsterisk className="[&_input]:bg-shiraz-800 [&_input]:border-frangipani-300 [&_input]:placeholder-shiraz-200" leftSection={<IconAt className="text-shiraz-200" size={16} />} label="Email" placeholder="Your email" /> 
      <PasswordInput withAsterisk className=" [&_input]:bg-shiraz-800 [&_input]:placeholder-shiraz-200" leftSection={<IconLock className="text-shiraz-200" size={18} stroke={1.5}/>} label="Password" placeholder="Password" /> 
      <Button color="frangipani.4" variant="filled">Login</Button>
      <div className="mx-auto ">Don't have an account?<Link to="/sign-up"className="text-frangipani-300 hover:underline" >Sign Up</Link></div>
 </div>
}
export default Login;