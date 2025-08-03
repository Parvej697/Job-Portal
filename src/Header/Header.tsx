import { Avatar, Indicator } from "@mantine/core";
import { IconBell, IconDeviceImacSearch, IconSettings } from "@tabler/icons-react";
import Navlinks from "./Navlinks";



const Header =()=>{
    return  <div className="w-full text-white bg-shiraz-800 font-[poppins] h-20 flex justify-between 
    px-6 items-center">
       <div className="flex  gap-3 items-center text-frangipani-200 ">
      
       <IconDeviceImacSearch className="h-10 w-10"  stroke={1.5}/>
       <div className="text-3xl font-semibold"> JobFinder</div>
       </div>


       {Navlinks()}

       <div className="flex gap-3 items-center">
         <div className="flex gap-2 items-center">
            <div>Parvej</div>
               <Avatar src="avatar.png" alt="it's me" /> 
            </div> 
            <div className="bg-shiraz-700 p-1.5 rounded-full">
               <IconSettings stroke={1.5}/>
            </div>
            <div className="bg-shiraz-700 p-1.5 rounded-full">
               <Indicator color="frangipani.1" size={8} offset={5} processing>
                  <IconBell  stroke={1.5}/>
               </Indicator>   
            </div>  
       </div>
    </div>
}
export default Header;