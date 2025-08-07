import { Button } from "@mantine/core";
import { useState } from "react";
import ExpInput from "./ExpInput";


const ExperienceCard =(props:any)=>{
    const[edit,setEdit]=useState(false);
 return !edit?<div className="flex flex-col gap-2">
    <div className="flex justify-between ">
            <div className="flex gap-2 items-center">
                    <div className="p-2 bg-shiraz-600 rounded-md">
                <img className="h-7 w-7" src={`/Icons/${props.company}.png`} alt="" />
                    </div>
                <div className="flex flex-col">
                    <div className="font-semibold">{props.title}</div>
                    <div className="text-sm text-shiraz-200 ">{props.company} &#x2022;{props.location}</div>
                </div>
            </div>
            <div className="text-sm text-shiraz-200">
                {props.startDate} - {props.endDate}
            </div>  
        </div>
        <div className="text-sm text-shiraz-200 text-justify">
           {props.description}
        </div>
        { props.edit&& <div className="flex gap-5">
            <Button onClick={()=>setEdit(true)} color="frangipani.3" variant="outline" >Edit</Button>
            <Button color="blue.9" variant="light" >Delete</Button>
        </div>}
 </div>:<ExpInput setEdit={setEdit}/>
}

export default ExperienceCard;