import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import JobDesc from "../JobDesc/JobDesc";
import RecommendedJob from "../JobDesc/RecommmendedJob";



const JobDescPage=()=>{
return <div className="min-h-[90vh]  bg-shiraz-800 font-[poppins] px-4">
          
           <Link className="my-5 inline-block" to="/find-jobs" >
            <Button leftSection={<IconArrowLeft size={20} />} color="frangipani.3" variant="light">Back</Button>
            </Link>
            <div className="flex gap-5 justify-around">
                <JobDesc/>
                <RecommendedJob/>
            </div>

</div>

}

export default JobDescPage;