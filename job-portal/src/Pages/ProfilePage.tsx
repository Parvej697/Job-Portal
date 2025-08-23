import { profile } from "../Data/TalentData";
import Profile from "../Component/Profile/Profile";


const ProfilePage =()=>{
return <div className="min-h-[90vh] pt-8 bg-mine-shaft-950 font-[poppins] px-4">
    {profile.length > 0 && <Profile {...profile[0]} />}
</div>
}
export default ProfilePage;