import { Avatar, Button, Divider } from "@mantine/core"
import { IconBriefcase, IconMapPin } from "@tabler/icons-react"
import ExperienceCard from "./ExperienceCArd"
import CertificateCard from "./CertificateCard"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProfile } from "../../Services/ProfileService"
import { useMediaQuery } from "@mantine/hooks"

const Profile =(props:any)=>{
   const matches = useMediaQuery("(max-width: 476px)");
   const {id} = useParams();
   const [profile,setProfile] = useState<any>({});  

   useEffect(() => {
  if (!id) {
    console.error("Profile ID missing in route");
    return;
  }

  const numericId = Number(id); // ab safe hai
  getProfile(numericId)
    .then((res) => setProfile(res))
    .catch((err) => console.log(err));
}, [id]);


    return <div className="w-2/3 lg-mx:w-full">
           <div className="relative">
             
              <img className="rounded-t-2xl xl-mx:h-40 xs-mx:h-32 w-full" src="/Profile/banner.jpg" alt="" />
                            <div  className="absolute cursor-pointer flex items-center justify-center !rounded-full
                             -bottom-1/3  md-mx:-bottom-10 sm-mx:-bottom-16 left-6">
                                  <Avatar className="!w-48 !h-48 md-mx:!w-40 md-mx:!h-40 border-mine-shaft-950 border-8
                                   rounded-full sm-mx:!h-36 sm-mx:!w-36 xs-mx:!h-32 xs-mx:!w-32"
                                   src={profile?.picture?`data:image/jpeg;base64,${profile?.picture}`:"/avatar.png"} alt="" />
                            </div>
              </div>
              <div className="px-3 mt-16">
                <div className="text-3xl xs-mx:text-2xl font-semibold flex justify-between" >{profile?.name} <Button color="eucalyptus.4" size={matches ?"sm":"md"} variant="light" >Message</Button>
                            </div>
                <div className="text-xl xs-mx:text-base flex gap-1 items-center">
                   <IconBriefcase className="h-5 w-5" stroke={1.5}/> {profile?.jobTitle} &bull; {profile?.company}</div>
                <div className="flex gap-1 text-lg xs-mx:text-base text-mine-shaft-300 items-center">
                    <IconMapPin className="h-5 w-5" stroke={1.5}/>{profile?.location}
               </div>
                <div className="flex gap-1 text-lg xs-mx:text-base text-mine-shaft-300 items-center">
               <IconBriefcase className="h-5 w-5" stroke={1.5}/>Experience: {profile?.totalExp} Years
            </div>
           </div>
           <Divider color="mine-shaft-800"  mx="xs" my="xl" />
           <div className="px-3">
              <div className="text-2xl font-semibold mb-3">About</div>
              <div className="text-sm text-mine-shaft-300 text-justify">
                  {profile?.about}
              </div>
           </div>
            <Divider color="mine-shaft-800" mx="xs" my="xl"/>
           <div className="px-3">
              <div className="text-2xl font-semibold mb-3">Skills</div>
              <div className="flex flex-wrap gap-2 text-sm font-medium">
                {
                    profile?.skills?.map((skill:any,index:any) =>
                         <div key={index} className="bg-eucalyptus-400 bg-opacity-15 rounded-3xl
                     text-mine-shaft-300 px-3 py-1">{skill}</div>  )
                }
              </div>
           </div>
           <Divider color="mine-shaft-800" mx="xs" my="xl" />
           <div className="px-3">
              <div className="text-2xl font-semibold mb-5">Experience</div> 
              <div className="flex flex-col gap-8">
                 {profile?.experiences?.map((exp: any, index: any) => (
                    <ExperienceCard key={index} {...exp} />
                  ))}

               </div>  
              </div>
               <Divider color="mine-shaft-800" mx="xs" my="xl" />
           <div className="px-3">
              <div className="text-2xl font-semibold mb-5">Certifications</div> 
              <div className="flex flex-col gap-8">
                 {profile?.certifications?.map((certi: any, index: any) => (
                    <CertificateCard key={index} {...certi} />
                   ))}

               </div>
              </div>
    </div>
}
export default Profile;