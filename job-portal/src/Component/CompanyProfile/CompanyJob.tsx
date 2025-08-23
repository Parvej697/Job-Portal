import { jobList } from "../../Data/JobsData";
import JobCard from "../FindJobs/JobCard";

const CompanyJob = ()=>{
  return  <div className="mt-10 flex flex-wrap justify-between gap-8 ">
                 {
                jobList.map((job,index) => <JobCard key={index} {...job} /> ) 
            }
            </div>

}
export default CompanyJob;