import { IconArrowLeft, IconDeviceImacSearch } from "@tabler/icons-react";
import SignUp from "../Component/SignUp/SignUp";
import Login from "../Component/SignUp/Login";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";




const SignUpPage =() =>{
     const navigate =useNavigate();
    const location =useLocation();
return <div className="min-h-[90vh]  bg-mine-shaft-950 font-[poppins] overflow-hidden sm-mx:overflow-y-auto ">
     <Button className="!absolute left-5 z-10" leftSection={<IconArrowLeft size={20} />} color="eucalyptus.4" my="md" onClick={()=>navigate("/") } variant="light">Home</Button>
           <div className={`w-{100vw} h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${location.pathname=='/sign-up'?'-translate-x-1/2 sm-mx:-translate-x-full ':'translate-x-0'}`}>
                     <Login/>
                <div className={`w-1/2 h-[100vh] sm-mx:hidden sm-mx:min-h-full transition-all duration-1000 ease-in-out ${location.pathname=="/sign-up"?"rounded-r-[200px]":"rounded-l-[200px]"} bg-mine-shaft-900 flex items-center gap-5 justify-center flex-col`}>
                      <div className="flex  gap-1 items-center text-eucalyptus-400">
                            <IconDeviceImacSearch className="h-16 w-16"  stroke={2.5}/>
                          <div className="text-6xl bs-mx:text-5xl md-mx:text-4xl sm-mx:text-3xl font-semibold"> JobFinder</div>
                     </div>
                     <div className="text-2xl bs-mx:text-xl md-mx:text-lg text-mine-shaft-200 font-semibold" >Find the Job made for you</div>
                </div>
                           <SignUp/>
           </div>
      </div>

}
export default SignUpPage;