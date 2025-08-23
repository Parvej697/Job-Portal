import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProfile } from "../../Services/ProfileService";
import { changeAppStatus } from "../../Services/JobService";
import { errorNotification, successNotification } from "../../Services/Notification";
import { formatInterviewTime, openBase64Pdf } from "../../Services/Utilities";



const TalentCard =(props:any)=>{
    const {id} =useParams();
    const [profile, setProfile] = useState<any>({});
    const [app, { open: openApp, close: closeApp }] = useDisclosure(false);

useEffect(() => {
    if(props.applicantId)getProfile(props.applicantId).then((res)=>{
        setProfile(res);
    }).catch((err)=>{
        console.log(err);
    })
    else setProfile(props);
}, [props])

const handleOffer = (status: string) => {
    let interview:any={id,applicantId:profile.id,applicationStatus:status};
    if (status === "INTERVIEWING") {
        const [hours, minutes] = time.split(":").map(Number);
        date?.setHours(hours, minutes);     
         interview={...interview, interviewTime: date};
    }
           changeAppStatus(interview).then((res)=>{
           if(status=="INTERVIEWING") successNotification("Interview Scheduled","Interview scheduled successfully");
           else if(status=="OFFERED") successNotification("Offered","Offer has been sent successfully");  
           else successNotification("Rejected","Application has been Rejected");
            window.location.reload();
            console.log(res);
        }).catch((err) => {
    console.log(err);
    const errorMsg = err.response?.data?.errormessage || err.message || "Something went wrong";
    errorNotification("Error", errorMsg);
});

}

     const [opened, { open, close }] = useDisclosure(false);
     const [date, setDate] = useState<Date | null>(null);
     const [time, setTime] = useState<any>(null);
     const ref=useRef<HTMLInputElement>(null);
    return <div className="bg-mine-shaft-900 p-4 w-96  flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_green]
     !shadow-eucalyptus-400 transition duration-300 ease-in-out bs-mx:w-[48%] sm-mx:w-full">
        <div className="flex justify-between ">
            <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-full">
                <Avatar className="" size="lg"  src={profile?.picture?`data:image/jpeg;base64,${profile?.picture}`:"/avatar.png"} alt="" />
                    </div>
                <div>
                    <div className="font-semibold text-lg">{props.name}</div>
                    <div className="text-sm text-mine-shaft-300  font-semibold">{profile?.jobTitle} &bull; {profile?.company}</div>
                </div>
            </div>
            <div><IconHeart stroke={1.5} className="text-mine-shaft-300 hover:cursor-pointer"/></div>
        </div>
        <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-eucalyptus-400 [&>div]:rounded-lg text-xs">
            {
                profile?.skills?.map((skill:any,index:any)=> index<4 && <div key={index}>{skill}</div>)
            }
        </div>
       <Text className="!text-xs text-justify text-mine-shaft-300" lineClamp={3}>{profile.about}
       </Text>
       <Divider color="mine-shaft.8" size="xs"/>
       {
        props.invited?<div className="flex gap-1 text-mine-shaft-300 text-sm items-center">
            <IconCalendarMonth className=""stroke={1.5} />Inteview: {formatInterviewTime(props.interviewTime)}
        </div>:<div className="flex justify-between">
            <div className=" text-mine-shaft-400">
               Exp: {props.totalExp?props.totalExp:0} Years
             </div>
            <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
               <IconMapPin className="h-5 w-5" stroke={1.5}/> {profile?.location}
            </div>
          </div>
       }
          
          <Divider color="shiraz.5" size="xs"/>
          <div className="flex items-center [&>*]:w-1/2 [&>*]:p-1">
          {
            !props.invited && <>
            <Link to={`/talent-profile/${profile?.id}`} >
            <Button color="eucalyptus.4" variant="outline" fullWidth>Profile</Button>
            </Link>
            
            <div>
                {props.posted?<Button onClick={open} rightSection={<IconCalendarMonth className="w-5 h-5" />} color="eucalyptus.4" variant="light" fullWidth>Schedule</Button>:<Button color="eucalyptus.4" variant="light" fullWidth>Message</Button>}
            </div>
            </>
          }
          {
            props.invited && <>
            <div><Button color="eucalyptus.4" variant="outline" onClick={()=>handleOffer("OFFERED")} fullWidth>Accept</Button></div>
            <div><Button color="eucalyptus.4" variant="light" onClick={()=>handleOffer("REJECTED")} fullWidth>Reject</Button></div>
            </>
          }
            
          </div>
          {
            (props.invited || props.posted) && <Button color="eucalyptus.4" variant="filled" onClick={openApp} autoContrast fullWidth>View Application</Button>
          } 
           <Modal opened={opened} onClose={close} radius="lg" title="Schedule Interview" centered>
                 <div className="flex flex-col gap-4 ">
                     <DateInput minDate={new Date()} value={date}  onChange={(value) => setDate(value ? new Date(value) : null)} label="Date" placeholder="Enter Date"/>
                      <TimeInput label="Time" value={time} onChange={(event)=>setTime(event.currentTarget.value)} ref={ref} minTime="" onClick={()=>ref.current?.showPicker()} />
                        <Button color="eucalyptus.4" onClick={() => handleOffer("INTERVIEWING")} variant="light" fullWidth>Schedule</Button>
                 </div>
           </Modal>
           <Modal opened={app} onClose={closeApp} radius="lg" title="Application" centered>
                 <div className="flex flex-col gap-4 ">
                    <div>
                         Email: &emsp; <a className="text-eucalyptus-400  hover:underline cursor-pointer text-center" href={`mailto:${props.email}`}>{props.email}</a>
                    </div>
                     <div>
                         Website: &emsp; <a  className="text-eucalyptus-400  hover:underline cursor-pointer text-center" href={props.website} target="_blank" >{props.website}</a>
                    </div>
                     <div>
                         Resume:&emsp; <span className="text-eucalyptus-400  hover:underline cursor-pointer text-center" onClick={() => openBase64Pdf(props.resume)}>{props.name}</span>
                    </div>
                    <div>
                        CoverLetter: &emsp; <div >{props.coverLetter}</div>
                    </div>
                 </div>
           </Modal>
    </div>
}
export default TalentCard;