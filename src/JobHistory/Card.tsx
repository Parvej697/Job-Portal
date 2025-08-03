import { Button, Divider, Text } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled, IconCalendarMonth, IconClockHour3 } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Card =(props:any)=>{
    return <Link to="/job" className="bg-shiraz-700 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_shiraz] !shadow-frangipani-400">
        <div className="flex justify-between ">
            <div className="flex gap-2 items-center">
                    <div className="p-2 bg-shiraz-600 rounded-md">
                <img className="h-7 w-7" src={`/Icons/${props.company}.png`} alt="" />
                    </div>
                <div>
                    <div className="font-semibold">{props.jobTitle}</div>
                    <div className="text-xs text-shiraz-200">{props.company} &#x2022; {props.applicants}</div>
                </div>
            </div>
        <div>{props.saved?<IconBookmarkFilled className="text-frangipani-300 hover:cursor-pointer"/>:<IconBookmark className="text-shiraz-300 hover:cursor-pointer"/>}</div>
        </div>
        <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-shiraz-600 [&>div]:text-frangipani-300 [&>div]:rounded-lg text-xs">
            <div>{props.experience}</div>
            <div>{props.jobType}</div>
            <div>{props.location}</div>
        </div>
       <Text className="!text-xs text-justify text-shiraz-200" lineClamp={3}>{props.description}
       </Text>
       <Divider color="shiraz.5" size="xs"/>
          <div className="flex justify-between">
            <div className="font-semibold text-shiraz-200">
                &#8377;{props.package}
             </div>
            <div className="flex gap-1 text-xs text-shiraz-300 items-center">
               <IconClockHour3 className="h-5 w-5" stroke={1.5}/> {props.applied?"Applied":props.offered?"Interviwed":"Posted"}{props.postedDaysAgo } Days ago
            </div>
          </div>
          {
            props.offered && <Divider color="shiraz.5" size="xs"/>
          }
          {
             props.offered &&<div className="flex 10:00 AM gap-2">
                   <div><Button color="frangipani.3" variant="outline" fullWidth>Accept</Button></div>
                    <div><Button color="frangipani.3" variant="light" fullWidth>Reject</Button></div>
            </div>
          }
          {
           props.interviewing && <div className="flex gap-1 text-shiraz-200 text-sm items-center">
            <IconCalendarMonth className="text-frangipani-300 w-5 h-5" stroke={1.5} /> Sun, 25 August  &bull; <span className="text-shiraz-300">10:00 AM</span> 
        </div>
          }
    </Link>
}

export default Card;