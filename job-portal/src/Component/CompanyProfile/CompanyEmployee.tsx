import { talents } from "../../Data/JobTalent";
import TalentCard from "../FindTalent/TalentCard";


const CompanyEmployee = ()=>{
  return  <div className="mt-10 flex flex-wrap  justify-evenly gap-x-14 gap-y-10">
                {
                   talents.map((talent,index)=> index<6 &&<TalentCard key={index} {...talent}/>)     
                }
               
            </div>

}
export default CompanyEmployee;