import { ActionIcon, Button, Divider, TagsInput, Textarea } from "@mantine/core"
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus } from "@tabler/icons-react"
import ExperienceCard from "./ExperienceCArd"
import CertificateCard from "./CertificateCard"
import { useState } from "react"
import SelectInputProfile from "./SelectInputProfile"
import { fields } from "../Data/Profile"
import ExpInput from "./ExpInput"
import CertiInput from "./CertiInput"


const Profile =(props:any)=>{ 
  
    const [about, setAbout] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, soluta.');
    const [skills,setSkills]=useState(["React", "MongoDB","SpringBoot","HTML","CSS","JavaScript","Node.js","Express","MySQL","Python","Django","Figma","Sktech","Docker","AWS"]);
    const select =fields;
    const[edit,setEdit]=useState([false,false,false,false,false]);
    const[addExp,setAddExp]=useState(false);
    const[addCerti,setAddCerti]=useState(false);
    const handleEdit=(index:any)=>{
        const newEdit ={...edit};
        newEdit[index]=!newEdit[index];
        setEdit(newEdit);
    }
    return <div className="w-4/5 mx-auto">
           <div className="relative">
              <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
              <img className="rounded-full h-48 w-48 -bottom-1/3 absolute left-3 border-shiraz-800 border-8" src="/avatar.png" alt="" />
              </div>
              <div className="px-3 mt-16">
                <div className="text-3xl font-semibold flex justify-between" >{props.name} <ActionIcon onClick={()=>handleEdit(0)} size="lg" color="frangipani.3" variant="subtle">
      {edit[0]?<IconDeviceFloppy  className="h-4/5 w-4/5 " />:<IconPencil className="h-4/5 w-4/5 "  />}
    </ActionIcon>
        </div>
        {
            edit[0]?<><div className="flex gap-10 [&_input]:bg-shiraz-800 [&_input]:text-frangipani-200 [&_input]:border-frangipani-300 [&_input]:placeholder-shiraz-200 [&>*]:w-1/2">
        <SelectInputProfile {...select[0]}/>
        <SelectInputProfile {...select[1]}/>
        </div>
        <div  className=" [&_input]:bg-shiraz-800 [&_input]:text-frangipani-200 [&_input]:border-frangipani-300 [&_input]:placeholder-shiraz-200 ">
        <SelectInputProfile  {...select[2]}/>
        </div></>:<> <div className="text-xl flex gap-1 items-center"> <IconBriefcase className="h-5 w-5" stroke={1.5}/>
         {props.role} &bull; {props.company}</div>
                <div className="flex gap-1 text-lg text-shiraz-300 items-center">
               <IconMapPin className="h-5 w-5" stroke={1.5}/>{props.location}
            </div></>
        }   </div>
 
 
 
           <Divider color="frangipani.3"  mx="xs" my="xl" />
           <div className="px-3">
              <div className="text-2xl font-semibold mb-3 flex justify-between">About <ActionIcon onClick={()=>handleEdit(1)} size="lg" color="frangipani.3" variant="subtle">
      {edit[1]?<IconDeviceFloppy  className="h-4/5 w-4/5 " />:<IconPencil className="h-4/5 w-4/5 "  />}
    </ActionIcon></div>
    {
        edit[1]?<> <Textarea className="[&_textarea]:bg-shiraz-800 [&_textarea]:border-frangipani-300 [&_textarea]:text-shiraz-200 [&_textarea]:placeholder-frangipani-200" autosize minRows={3} value={about} placeholder="Enter about yourself" onChange={(event) => setAbout(event.currentTarget.value)}/></>:
        <><div className="text-sm text-shiraz-200 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, soluta.
              </div></>
    }     </div>
          
          
          
            <Divider color="frangipani.3" mx="xs" my="xl"/>
           <div className="px-3">
              <div className="text-2xl font-semibold mb-3 flex justify-between">Skills <ActionIcon onClick={()=>handleEdit(2)} size="lg" color="frangipani.3" variant="subtle">
      {edit[2]?<IconDeviceFloppy  className="h-4/5 w-4/5 " />:<IconPencil className="h-4/5 w-4/5 "  />}
    </ActionIcon></div>
    {
        edit[2]?<><TagsInput value={skills} onChange={setSkills} placeholder="Add skill" splitChars={[',', ' ', '|']}/></>
        :<><div className="flex flex-wrap gap-2 text-sm font-medium">
                {
                    props.skill?.map((skill:any,index:any) =>
                         <div key={index} className="bg-frangipani-300 bg-opacity-15 rounded-3xl
                     text-frangipani-200 px-3 py-1">{skill}</div>  )
                }
              </div></>
    } </div>

    
           <Divider color="frangipani.3" mx="xs" my="xl" />
           <div className="px-3">
              <div className="text-2xl font-semibold mb-5 flex justify-between">Experience 
                <div className="flex gap-2"> <ActionIcon onClick={()=>setAddExp(true)} size="lg" color="frangipani.3" variant="subtle">
              <IconPlus className="h-4/5 w-4/5 "  />
                                             </ActionIcon>
             <ActionIcon onClick={()=>handleEdit(3)} size="lg" color="frangipani.3" variant="subtle">
                 {edit[3]?<IconDeviceFloppy  className="h-4/5 w-4/5 " />:<IconPencil className="h-4/5 w-4/5 "  />}
             </ActionIcon></div></div> 
              <div className="flex flex-col gap-8">
                 {props.experience?.map((experience: any, index: any) => (
                    <ExperienceCard key={index} {...experience} edit={edit[3]} />
                  ))}
                    {addExp && <ExpInput add setEdit={setAddExp}/> }
               </div>  
              </div>



               <Divider color="frangipani.3" mx="xs" my="xl" />
           <div className="px-3">
              <div className="text-2xl font-semibold mb-5 flex justify-between">Certifications
                 <div className="flex gap-2"> <ActionIcon onClick={()=>setAddCerti(true)} size="lg" color="frangipani.3" variant="subtle">
              <IconPlus className="h-4/5 w-4/5 "  />
                                             </ActionIcon>
             <ActionIcon onClick={()=>handleEdit(4)} size="lg" color="frangipani.3" variant="subtle">
                 {edit[3]?<IconDeviceFloppy  className="h-4/5 w-4/5 " />:<IconPencil className="h-4/5 w-4/5 "  />}
             </ActionIcon></div> </div>
              <div className="flex flex-col gap-8">
                 {props.certifications?.map((certificate: any, index: any) => (
                    <CertificateCard key={index} edit={edit[4]} {...certificate} />
                   ))}
                   {
                     addCerti && <CertiInput setEdit={setAddCerti}/>
                   }

               </div>
              </div>
    </div>
}
export default Profile;