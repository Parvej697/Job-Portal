import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";
import TalentCard from "../FindTalent/TalentCard";
import { useEffect, useState } from "react";

const PostedJobDesc = (props:any) =>{
   const[arr,setArr] =useState<any>([]);
   const[tab,setTab] =useState("overview");

   const handleTabChange = (value: any) => {
      setTab(value);
      if(value=="applicants"){
         setArr(props.applicants?.filter((x:any)=>x.applicationStatus==="APPLIED"));
      }else if(value=="invited"){
         setArr(props.applicants?.filter((x:any)=>x.applicationStatus==="INTERVIEWING"));
      }
      else if(value=="offered"){
         setArr(props.applicants?.filter((x:any)=>x.applicationStatus==="OFFERED"));
   }
      else if(value=="rejected"){
         setArr(props.applicants?.filter((x:any)=>x.applicationStatus==="REJECTED"));
      }
   }

   useEffect(()=>{
            handleTabChange("overview");
   },[props]);

return <div className=" w-3/4 md-mx:w-full px-5 md-mx:p-0 ">
     { props.jobTitle?<><div className="text-2xl xs-mx:text-xl font-semibold flex items-center ">{props.jobTitle} <Badge ml="sm" size="sm" variant="light" color="eucalyptus.4">{props.jobStatus}</Badge>
     </div>
     <div className="font-medium xs-mx:text-sm text-mine-shaft-300 mb-5">{props.location}</div>
     <div>
         <Tabs  variant="outline" radius="lg" value={tab} onChange={handleTabChange}>
                   <Tabs.List className="mb-5 [&_button]:!text-lg [&_button]:font-semibold
           [&_button[data-active='true']]:text-eucalyptus-400 sm-mx:[&_button]:!text-lg
            [&_button[data-active='true']]:!border-b-mine-shaft-800 xsm-mx:[&_button]:!text-sm xs-mx:[&_button]:!text-base 
            xs-mx:[&_button]:!px-1.5 xs-mx:[&_button]:!py-2 xs-mx:font-medium">
                     <Tabs.Tab value="overview">Overview</Tabs.Tab>
                     <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                     <Tabs.Tab value="invited">Invited</Tabs.Tab>
                     <Tabs.Tab value="offered">Offered</Tabs.Tab>
                     <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
                   </Tabs.List>

                  <Tabs.Panel value="overview" className="[&>div]:w-full"><JobDesc {...props} edit={true} closed={props.jobStatus=="CLOSED"} />
                  </Tabs.Panel>
                  <Tabs.Panel value="applicants">
                      <div className="mt-10 flex flex-wrap  justify-evenly gap-x-14 gap-y-10">
                {
                   arr?.length?arr?.map((talent:any,index:any)=> 
                   <TalentCard key={index} {...talent} posted={true} />)  :  <div className="text-2xl font-semibold">No Applicants</div> 
                }
               
            </div>
                  </Tabs.Panel>
                  <Tabs.Panel value="invited">
                       <div className="mt-10 flex flex-wrap  justify-evenly gap-x-14 gap-y-10">
                {
                   arr?.length?arr?.map((talent:any,index:any)=><TalentCard key={index} {...talent} invited={true}/>):<div className="text-2xl font-semibold">No Invited Candidates</div>  
                }
                </div>
                  </Tabs.Panel>
                   <Tabs.Panel value="offered">
                       <div className="mt-10 flex flex-wrap  justify-evenly gap-x-14 gap-y-10">
                {
                  arr?.length?arr?.map((talent:any,index:any)=><TalentCard key={index} {...talent} offered={true}/>) : <div className="text-2xl font-semibold">No Offered Candidates</div>
                }
                </div>
                  </Tabs.Panel>
                  <Tabs.Panel value="rejected">
                       <div className="mt-10 flex flex-wrap  justify-evenly gap-x-14 gap-y-10">
                {
                  arr?.length?arr?.map((talent:any,index:any)=><TalentCard key={index} {...talent} rejected={true}/>):<div className="text-2xl font-semibold">No Rejected Candidates</div>
                }
                </div>
                  </Tabs.Panel>
                </Tabs>
     </div> </> : <div className="text-2xl font-semibold flex justify-center min-h-[70vh] items-center">No Job Selected</div>}
</div>


}

export default PostedJobDesc;