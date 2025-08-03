import { jobList } from "../Data/JobsData";
import JobCard from "./JobCard";
import Sort from "./Sort";

const Job =()=>{
    return <div className="mx-10 p-5">
            <div className="flex justify-between">
                 <div className="text-2xl font-semibold">Recommended Jobs</div>
                    <Sort/>
            </div>
            <div className="mt-10 flex flex-wrap justify-between gap-5">
                 {
                jobList.map((job,index) => <JobCard key={index} {...job} /> ) 
            }
            </div>
           
    </div>
}

export default Job;