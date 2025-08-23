import { ActionIcon } from "@mantine/core";
import { IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ExperienceCard from "./ExperienceCArd";
import ExpInput from "./ExpInput";
import { useMediaQuery } from "@mantine/hooks";

const Experience =()=>{
   const  matches = useMediaQuery("(max-width: 475px)");
  const profile =useSelector((state:any)=>state.profile);
  const [edit,setEdit]=useState(false);
  const[addExp,setAddExp]=useState(false);
  const handleClick=()=>{
    setEdit(!edit);
  }
  return    <div className="px-3">
              <div className="text-2xl font-semibold mb-5 flex justify-between">Experience 
                <div className="flex gap-2"> <ActionIcon onClick={()=>setAddExp(true)} size={matches?"md":"lg"} color="eucalyptus.4" variant="subtle">
              <IconPlus className="h-4/5 w-4/5 "  />
                                             </ActionIcon>
             <ActionIcon onClick={handleClick} size={matches?"md":"lg"} color={edit?"red.8":"eucalyptus.4"} variant="subtle">
                 {edit?<IconX  className="h-4/5 w-4/5 " />:<IconPencil className="h-4/5 w-4/5 "  />}
             </ActionIcon></div></div> 
              <div className="flex flex-col gap-8">
                 {profile?.experiences?.map((experience: any, index: any) => (
                    <ExperienceCard key={index} index={index} {...experience} edit={edit} />
                  ))}
                    {addExp && <ExpInput add setEdit={setAddExp}/> }
               </div>  
              </div>


}
export default Experience;