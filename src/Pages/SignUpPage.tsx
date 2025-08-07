import { IconDeviceImacSearch } from "@tabler/icons-react";
import SignUp from "../SignUp/SignUp";
import Login from "../SignUp/Login";
import { useLocation } from "react-router-dom";




const SignUpPage =() =>{
    const location =useLocation();
return <div className="min-h-[90vh]  bg-shiraz-800 font-[poppins] overflow-hidden ">
           <div className={`w-{100vw} h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${location.pathname=='/sign-up'?'-translate-x-1/2':'translate-x-0'}`}>
                     <Login/>
                <div className={`w-1/2 h-full transition-all duration-1000 ease-in-out ${location.pathname=="/sign-up"?"rounded-r-[200px]":"rounded-l-[200px]"} bg-shiraz-700 flex items-center gap-5 justify-center flex-col`}>
                      <div className="flex  gap-1 items-center text-frangipani-300 ">
                            <IconDeviceImacSearch className="h-16 w-16"  stroke={2.5}/>
                          <div className="text-6xl font-semibold"> JobFinder</div>
                     </div>
                     <div className="text-2xl text-shiraz-300 font-semibold" >Find the Job made for you</div>
                </div>
                           <SignUp/>
           </div>
      </div>

}
export default SignUpPage;