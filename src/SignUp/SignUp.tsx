import { Anchor, Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const SignUp =()=>{
   
 return <div className="  w-1/2 flex flex-col justify-center px-20 gap-3 ">
    <div className="text-2xl font-semibold">Create Account</div>
      <TextInput withAsterisk  className="[&_input]:bg-shiraz-800 [&_input]:border-frangipani-300 [&_input]:placeholder-shiraz-200" label="Full Name"  placeholder="Your name"/>
      <TextInput withAsterisk className="[&_input]:bg-shiraz-800 [&_input]:border-frangipani-300 [&_input]:placeholder-shiraz-200" leftSection={<IconAt className="text-shiraz-200" size={16} />} label="Email" placeholder="Your email" /> 
      <PasswordInput withAsterisk className=" [&_input]:bg-shiraz-800 [&_input]:placeholder-shiraz-200" leftSection={<IconLock className="text-shiraz-200" size={18} stroke={1.5}/>} label="Password" placeholder="Password" /> 
      <PasswordInput withAsterisk  className="[&_input]:bg-shiraz-800 [&_input]:placeholder-shiraz-200" leftSection={<IconLock className="text-shiraz-200" size={18} stroke={1.5}/>} label="Confirm Password" placeholder="Confirm Password" /> 
      <Checkbox className="[&_input]:bg-shiraz-800 [&_input]:border-frangipani-300" label={<>I accept{' '}<Anchor>terms & condition</Anchor></>} /> 
      <Button color="frangipani.4" variant="filled">Sign Up</Button>
      <div className="mx-auto ">Have an account? <Link to="/login"className="text-frangipani-300 hover:underline" >Login</Link></div>
 </div>
}
export default SignUp;