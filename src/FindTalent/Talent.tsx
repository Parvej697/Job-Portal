import { talents } from "../Data/JobTalent";
import Sort from "../FindJobs/Sort";

import TalentCard from "./TalentCard";

const Talent =()=>{
    return <div className=" mx-20 p-5 ">
            <div className="flex justify-between mt-5">
                 <div className="text-2xl font-semibold">Talents</div>
                    <Sort/>
            </div>
            <div className="mt-10  flex flex-wrap justify-between gap-5">
                {
                   talents.map((talent,index)=><TalentCard key={index} {...talent}/>)     
                }
               
            </div>
           
    </div>
}

export default Talent;