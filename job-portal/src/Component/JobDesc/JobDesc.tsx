import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card, } from "../../Data/JobDescData";
import DOMPurify from 'dompurify';
import { timeAgo } from "../../Services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { useEffect, useState } from "react";
import { postJob } from "../../Services/JobService";
import { errorNotification, successNotification } from "../../Services/Notification";



const JobDesc =(props:any)=>{ 
    const user=useSelector((state:any)=>state.user);
    const[applied ,setApplied]=useState(false);
    const dispatch =useDispatch();
    const profile=useSelector((state:any)=>state.profile);
    const handleSaveJob=()=>{
        let savedJobs:any =[...profile.savedJobs];
        if(savedJobs?.includes(props.id)){
            savedJobs=savedJobs?.filter((id:any)=>id!==props.id)
        }else{
            savedJobs=[...savedJobs,props.id];
        }

        let updatedProfile={...profile,savedJobs:savedJobs};
        dispatch(changeProfile(updatedProfile));
    }

useEffect(()=>{
    if(props.applicants?.filter((applicant:any)=>applicant.applicantId==user.id).length>0){
        setApplied(true);
    }else setApplied(false);
}, [props])


const handleClose=()=>{
    postJob({...props, jobStatus: "CLOSED" }).then((res) => {
        successNotification("Success","Job Closed Successfully.");
}).catch((err) => {
        errorNotification("Error",err.response.data.errorMessage);
    });
}
   const data = (DOMPurify as any).default
  ? (DOMPurify as any).default.sanitize(props.description)
  : (DOMPurify as any).sanitize(props.description);
 return <div className="w-2/3 bs-mx:w-full">
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex gap-10 items-center xs-mx:gap-5">
                    <div className="p-3 bg-mine-shaft-800 rounded-xl flex shrink-0">
                <img className="h-14 w-14 xs-mx:h-10 xs-mx:w-10" src={`/Icons/${props.company}.png`} alt="" />
                    </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-2xl xs-mx:text-2xl">{props.jobTitle}</div>
                    <div className="text-lg text-mine-shaft-300 flex flex-wrap xs-mx:text-base"> <span>{props.company} &bull; </span> <span> {timeAgo(props.postTime)} &bull; </span> <span> {props.applicants?props.applicants.length:0} Applicants </span></div>
                </div>
            </div>
            <div className="flex sm:flex-col gap-2 items-center sm-mx:my-5 sm-mx:w-full sm-mx:[&>button]:w-1/2">
                { (props.edit || !applied) && <Link to={props.edit?`/post-job/${props.id}`: `/apply-job/${props.id}`}>
                     <Button size="sm" color="green.8" variant="light">{props.closed? "Reopen":props.edit?"Edit":"Apply"}</Button>                
                </Link>}
                {
                    !props.edit && applied &&  <Button size="sm" color="green.8" variant="light">Applied</Button> 
                }
               {props.edit && !props.closed? <Button size="sm" color="red.9" onClick={handleClose} variant="outline">Close</Button> : profile.savedJobs?.includes(props.id) ?<IconBookmarkFilled onClick={handleSaveJob} className="text-frangipani-400 cursor-pointer"/>
            :<IconBookmark onClick={handleSaveJob} className="text-shiraz-300 hover:text-frangipani-400 cursor-pointer"/> }
            </div>
        </div>
        <Divider color="mine-shaft.8" my="xl" size="xs"/>
       <div className="flex justify-between gap-4 sm-mx:flex-wrap ">
        {
            card.map((item:any, index:any)=> <div key={index} className="flex flex-col items-center gap-1"> 

                 <ActionIcon color="eucalyptus.4" className="!h-12 !w-12 xs-mx:!h-8 xs-mx:!w-8" variant="light" radius="xl" aria-label="Settings">
                        <item.icon className="h-4/5 w-4/5" stroke={1.5} />
                </ActionIcon>
                <div className=" text-mine-shaft-300 xs-mx:text-sm">{item.name}</div>
                <div className="font-semibold text-base xs-mx:text-sm ">{props?props[item.id]:"NA"} {item.id=="packageOffered" && <>LPA</> }</div>
                </div>)
}
       </div>
      <Divider color="mine-shaft.8" my="xl" size="xs"/>
      <div>
         <div className="text-xl font-semibold mb-5">Required Skills</div>
         <div className="flex flex-wrap gap-2 ">
            {
                props?.skillsRequired?.map((skill:any,index:number)=> <ActionIcon key={index} color="eucalyptus.4" className="!h-fit !w-fit font-medium !text-sm xs-mx:!text-xs " p="xs" variant="light" radius="xl" aria-label="Settings">
                       {skill}
                </ActionIcon>)
            }
               
         </div>
      </div>
      <Divider color="mine-shaft.8" my="xl" size="xs"/>
      <div className="[&_h4]:text-xl [&_*]:text-mine-shaft-300
       [&_li]:marker:text-eucalyptus-300 [&_li]:mb-1 [&_h4]:my-5 
       [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify [&_p]:text-sm [&_li]:text-sm
        " dangerouslySetInnerHTML={{__html:data}}>
      </div>
       <Divider color="mine-shaft.8" my="xl" size="xs"/>
       <div>
           <div className="text-xl font-semibold mb-5">About Company</div>
           <div className="flex justify-between items-center xs-mx:flex-wrap xs-mx:gap-2  mb-3 ">
            <div className="flex gap-2 items-center">
                    <div className="p-3 bg-mine-shaft-800 rounded-xl">
                <img className="h-8 w-8" src={`/Icons/${props.company}.png`} alt="" />
                    </div>
                <div className="flex flex-col ">
                    <div className="font-medium text-lg ">{props.company}</div>
                    <div className=" text-mine-shaft-300">10K+ Employees</div>
                </div>
            </div>
            
                <Link to={`/company/${props.company}`}>
                <Button  color="eucalyptus.4" variant="light"> Company Page</Button>
                </Link>
            </div>
            <div className="text-mine-shaft-300 text-justify xs-mx:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eligendi reiciendis maxime quis consequatur natus quam, enim illum consectetur esse non. At ab eveniet neque nisi laudantium non! Culpa, inventore non? Hic assumenda aut nobis, ipsam praesentium aperiam accusantium atque?</div>
        </div>
       </div>


}
export default JobDesc;