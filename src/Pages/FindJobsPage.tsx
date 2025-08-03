import { Divider } from "@mantine/core";
import SearchBar from "../FindJobs/SearchBar";
import Job from "../FindJobs/Job";

const FindJobs =()=>{
    return <div className="min-h-[90vh] bg-shiraz-800 font-[poppins] px-4">
        
        <SearchBar/>
        <Divider color="frangipani.3"  size="xs"/>
        <Job/>
    </div>
}
export default FindJobs;