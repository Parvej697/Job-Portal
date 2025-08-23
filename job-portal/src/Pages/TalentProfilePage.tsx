import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import Profile from "../Component/TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendTalent from "../Component/TalentProfile/RecommendTalent";
import { useEffect, useState } from "react";
import { getAllprofiles } from "../Services/ProfileService";


const TalentProfilePage=()=>{
    const navigate = useNavigate();
    const [talents,setTalents] = useState<any[]>([]);

     useEffect(() => {
         getAllprofiles().then((res)=>{
             setTalents(res);
         }).catch((err)=>{
             console.error(err);
         });
     }, []);

return <div className="min-h-[90vh]  bg-mine-shaft-950 font-[poppins] px-4 ">
          

            <Button onClick={() => navigate(-1)} my="sm" leftSection={<IconArrowLeft size={20} />} color="eucalyptus.4" variant="light">Back</Button>


            <div className="flex gap-5  lg-mx:flex-wrap">
               {profile.length > 0 && <Profile {...profile[0]} />}
               <RecommendTalent  talents={talents} />
            </div>

</div>

}

export default TalentProfilePage;