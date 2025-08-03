import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../Data/JobDescData";
import DOMPurify from 'dompurify';



const JobDesc =(props:any)=>{ 
   const data = (DOMPurify as any).default
  ? (DOMPurify as any).default.sanitize(desc)
  : (DOMPurify as any).sanitize(desc);
 return <div className="w-2/3">
          <div className="flex justify-between ">
            <div className="flex gap-2 items-center">
                    <div className="p-3 bg-shiraz-600 rounded-xl">
                <img className="h-14 w-14" src={`/Icons/Google.png`} alt="" />
                    </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-2xl">Software engineer III</div>
                    <div className="text-lg text-shiraz-300">Google &bull; 3 days ago &bull; 12 Applicants</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <Link to="/apply-job">
                <Button size="sm" color="frangipani.3" variant="light">{props.edit?"Edit":"Apply"}</Button>
                </Link>
               {props.edit? <Button size="sm" color="blue.9" variant="outline">Delete</Button>: <IconBookmark className="text-frangipani-300 hover:cursor-pointer" stroke={1.5}/>}
            </div>
        </div>
        <Divider color="frangipani.3" my="xl" size="xs"/>
       <div className="flex justify-between ">
        {
            card.map((item:any, index:any)=> <div key={index} className="flex flex-col items-center gap-1"> 
        
                 <ActionIcon color="frangipani.3" className="!h-12 !w-12 " variant="light" radius="xl" aria-label="Settings">
                        <item.icon className="h-4/5 w-4/5" stroke={1.5} />
                </ActionIcon>
                <div className="text-sm text-shiraz-300">{item.name}</div>
                <div className="font-semibold ">{item.value}</div>
                </div>)
}
       </div>
      <Divider color="frangipani.3" my="xl" size="xs"/>
      <div>
         <div className="text-xl font-semibold mb-5">Required Skills</div>
         <div className="flex flex-wrap gap-2 ">
            {
                skills.map((item:any,index:any)=> <ActionIcon key={index} color="frangipani.3" className="!h-fit !w-fit font-medium !text-sm  " p="xs" variant="light" radius="xl" aria-label="Settings">
                       {item}
                </ActionIcon>)
            }
               
         </div>
      </div>
      <Divider color="frangipani.3" my="xl" size="xs"/>
      <div className="[&_h4]:text-xl [&_*]:text-shiraz-300
       [&_li]:marker:text-frangipani-300 [&_li]:mb-1 [&_h4]:my-5 
       [&_h4]:font-semibold [&_h4]:text-shiraz-200 [&_p]:text-justify
        " dangerouslySetInnerHTML={{__html:data}}>
      </div>
       <Divider color="frangipani.3" my="xl" size="xs"/>
       <div>
           <div className="text-xl font-semibold mb-5">About Company</div>
           <div className="flex justify-between mb-3 ">
            <div className="flex gap-2 items-center">
                    <div className="p-3 bg-shiraz-600 rounded-xl">
                <img className="h-8 w-8" src={`/Icons/Google.png`} alt="" />
                    </div>
                <div className="flex flex-col ">
                    <div className="font-medium text-lg ">Google</div>
                    <div className=" text-shiraz-300">10K+ Employees</div>
                </div>
            </div>
            
                <Link to="/company">
                <Button  color="frangipani.3" variant="light"> Company Page</Button>
                </Link>
            </div>
            <div className="text-shiraz-200 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eligendi reiciendis maxime quis consequatur natus quam, enim illum consectetur esse non. At ab eveniet neque nisi laudantium non! Culpa, inventore non? Hic assumenda aut nobis, ipsam praesentium aperiam accusantium atque?</div>
        </div>
       </div>


}
export default JobDesc;