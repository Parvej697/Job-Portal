import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";


const TalentCard =(props:any)=>{
     const [opened, { open, close }] = useDisclosure(false);
     const [value, setValue] = useState<string | null>(null);
     const ref=useRef<HTMLInputElement>(null);
    return <div className="bg-shiraz-700 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_shiraz] !shadow-frangipani-400">
        <div className="flex justify-between ">
            <div className="flex gap-2 items-center">
                    <div className="p-2 bg-shiraz-600 rounded-full">
                <Avatar className="" size="lg" src={`/${props.image}.png`} alt="" />
                    </div>
                <div>
                    <div className="font-semibold text-lg">{props.name}</div>
                    <div className="text-sm text-shiraz-200  font-semibold">{props.role} &bull; {props.company}</div>
                </div>
            </div>
            <div><IconHeart stroke={1.5} className="text-shiraz-300 hover:cursor-pointer"/></div>
        </div>
        <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-shiraz-600 [&>div]:text-frangipani-300 [&>div]:rounded-lg text-xs">
            {
                props.topSkills?.map((skill:any,index:any)=><div key={index}>{skill}</div>)
            }
        </div>
       <Text className="!text-xs text-justify text-shiraz-200" lineClamp={3}>{props.about}
       </Text>
       <Divider color="shiraz.5" size="xs"/>
       {
        props.invited?<div className="flex gap-1 text-shiraz-200 text-sm items-center">
            <IconCalendarMonth className=""stroke={1.5} />Inteview:August 27, 2025 10:00 AM
        </div>:<div className="flex justify-between">
            <div className="font-semibold text-shiraz-200">
               {props.expectedCtc}
             </div>
            <div className="flex gap-1 text-xs text-shiraz-300 items-center">
               <IconMapPin className="h-5 w-5" stroke={1.5}/> {props.postedDaysAgo }{props.location}
            </div>
          </div>
       }
          
          <Divider color="shiraz.5" size="xs"/>
          <div className="flex items-center [&>*]:w-1/2 [&>*]:p-1">
          {
            !props.invited && <>
            <Link to="/talent-profile" >
            <Button color="frangipani.3" variant="outline" fullWidth>Profile</Button>
            </Link>
            
            <div>
                {props.posted?<Button onClick={open} rightSection={<IconCalendarMonth className="w-5 h-5" />} color="frangipani.3" variant="light" fullWidth>Schedule</Button>:<Button color="frangipani.3" variant="light" fullWidth>Message</Button>}
            </div>
            </>
          }
          {
            props.invited && <>
            <div><Button color="frangipani.3" variant="outline" fullWidth>Accept</Button></div>
            <div><Button color="frangipani.3" variant="light" fullWidth>Reject</Button></div>
            </>
          }
            
          </div>
           <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
                 <div className="flex flex-col gap-4 ">
                     <DateInput minDate={new Date()} value={value}onChange={setValue} label="Date" placeholder="Enter Date"/> 
                      <TimeInput label="Time" ref={ref} onClick={()=>ref.current?.showPicker()} />
                        <Button color="frangipani.3" variant="light" fullWidth>Schedule</Button>
                 </div>
           </Modal>
    </div>
}
export default TalentCard;