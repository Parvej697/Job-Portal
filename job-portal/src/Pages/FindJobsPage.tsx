import { Divider } from "@mantine/core";
import SearchBar from "../Component/FindJobs/SearchBar";
import Job from "../Component/FindJobs/Job";



const FindJobs =()=>{
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-[poppins] px-4">
        
        <SearchBar/>
        <Divider color="mine-shaft.8"  size="xs"/>
        <Job/>
    </div>
}
export default FindJobs;