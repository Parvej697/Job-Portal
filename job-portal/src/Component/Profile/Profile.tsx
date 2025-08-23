import {  Avatar, Divider, FileInput, Overlay } from "@mantine/core"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../../Services/ProfileService"
import Info from "./Info"
import { changeProfile, setProfile } from "../../Slices/ProfileSlice"
import About from "./About"
import Skills from "./Skills"
import Experience from "./Experience"
import Certificate from "./Certficate"
import { useHover } from "@mantine/hooks"
import { IconEdit } from "@tabler/icons-react"
import { successNotification } from "../../Services/Notification"
import { getBase64 } from "../../Services/Utilities"



const Profile =(props:any)=>{ 
  const handleFileChange =async(image:any)=>{
    let picture:any =await getBase64(image);
    let updatedProfile={...profile,picture:picture.split(',')[1]};
     dispatch(changeProfile(updatedProfile));
    successNotification("Success","Profile Picture Updated Successfully.");
  }
 
    const dispatch =useDispatch();
    const user =useSelector((state:any)=>state.user);
    const profile =useSelector((state:any)=>state.profile);
   
    useEffect(()=>{
      getProfile(user.profileId).then((res)=>{
        dispatch(setProfile(res));
        console.log(res);
      }).catch((error:any)=>{
        console.log(error);
      });
    },[ dispatch, user.profileId ]);
      
    const {hovered ,ref}=useHover();
    return <div className=" w-4/5 lg-mx:w-full  mx-auto">
         
           <div className="relative px-5">
              <img className="rounded-t-2xl xs-mx:h-32" src="/Profile/banner.jpg" alt="" />
              <div ref={ref} className="absolute cursor-pointer flex items-center justify-center !rounded-full -bottom-1/3 md-mx:-bottom-10 sm-mx:-bottom-16 left-6">
                    <Avatar className="!w-48 !h-48 md-mx:!w-40 md-mx:!h-40 border-mine-shaft-950 border-8 rounded-full sm-mx:!h-36 sm-mx:!w-36 xs-mx:!h-32 xs-mx:!w-32"src={profile.picture?`data:image/jpeg;base64,${profile.picture}`:"/avatar.png"} alt="" />
                    {hovered && <Overlay className="!rounded-full " color="#000" backgroundOpacity={0.75} />}
                    {hovered && <IconEdit className="absolute z-[300] !w-16 !h-16 " />} 

                    {hovered && <FileInput onChange={handleFileChange} className="absolute  z-[301] !w-full [&_*]:!rounded-full [&_*]:!h-full !h-full" variant="transparent" 
                    accept="image/png,image/jpeg" /> }        

              </div>
              </div>
              
              <div className="px-3 mt-16">
                <Info/>
        </div>
           <Divider color="mine-shaft.9"  mx="xs" my="xl" />
          <About/>
            <Divider color="mine-shaft.9" mx="xs" my="xl"/>
          <Skills/>
           <Divider color="mine-shaft.9" mx="xs" my="xl" />
           <Experience/>
               <Divider color="mine-shaft.9" mx="xs" my="xl" />
           <Certificate/>
          
    </div>
}
export default Profile;