import { profile } from "../Data/TalentData";
import Profile from "../Profile/Profile";


const ProfilePage =()=>{
return <div className="min-h-[90vh] pt-8  bg-shiraz-800 font-[poppins] ">
    {profile.length > 0 && <Profile {...profile[0]} />}
</div>
}
export default ProfilePage;