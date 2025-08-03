import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendTalent from "../TalentProfile/RecommendTalent";


const TalentProfilePage=()=>{
return <div className="min-h-[90vh]  bg-shiraz-800 font-[poppins] px-4">
          
           <Link className="my-5 inline-block" to="/find-talent" >
            <Button leftSection={<IconArrowLeft size={20} />} color="frangipani.3" variant="light">Back</Button>
            </Link>
            

            <div className="flex gap-5 justify-around">
               {profile.length > 0 && <Profile {...profile[0]} />}
               <RecommendTalent/>
            </div>

</div>

}

export default TalentProfilePage;