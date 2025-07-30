import { Avatar } from "@mantine/core";
import { work } from "../Data/Data";

const Working =()=>{
 return <div className="mt-20  pb-5">
     <div className="text-4xl text-center font-semibold mb-3 text-shiraz-100">How it
        <span className="text-frangipani-200"> Works</span></div>

        <div className="text-lg mb-10 mx-auto text-shiraz-200 text-center w-1/2">Effortlessly navigate through the process 
        and land your dream job!</div>

          <div className="flex px-16 justify-between items-center">
            <div className="relative"> 
                <img className="w-[30rem] ml-10" src="/Working/Girl.png" alt="Girl" />
                <div className="w-36 flex flex-col items-center gap-1 border border-shiraz-200 rounded-xl py-3 px-1
                         backdrop-blur-md absolute top-[15%] right-0">
                    <Avatar className="!h-16 !w-16" src="avatar1.png" alt="it's me"/>
                    <div className="text-sm font-semibold text-frangipani-200 text-center">
                        Complete your profile
                    </div>
                    <div className="text-xs text-frangipani-300 ">
                        70% Completed
                    </div>
                </div>
            </div>


            <div className="flex flex-col mr-12 gap-10">
                {
                    work.map((item,index)=><div key={index} className="flex items-center gap-4">
                    <div className="p-2.5 bg-frangipani-300 rounded-full">
                        <img className="h-12 w-12" src={`/Working/${item.name}.png`} alt="{item.name}" />
                    </div>
                    <div>
                       <div className="text-shiraz-200 text-xl font-semibold">{item.name}
                       </div>
                        <div className="text-shiraz-300">{item.desc}
                        </div>
                    </div>
                </div>)
                }
            </div>
          </div>
 </div>

}
export default Working;