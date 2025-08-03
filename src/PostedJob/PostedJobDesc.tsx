import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";
import { talents } from "../Data/JobTalent";
import TalentCard from "../FindTalent/TalentCard";

const PostedJobDesc = () =>{
return <div className="mt-5 w-3/4 px-5">
     <div className="text-2xl font-semibold flex items-center ">Software Engineer <Badge ml="sm" size="sm" variant="light" color="frangipani.3">Badge</Badge>
     </div>
     <div className="font-medium text-shiraz-300 mb-5">Indore, Madhya Pradesh</div>
     <div>
         <Tabs  variant="outline" radius="lg" defaultValue="about">
                   <Tabs.List className="border-b-2 mb-5 border-frangipani-300 [&_button]:!text-lg [&_button]:font-semibold [&_button[data-active='true']]:text-frangipani-300 [&_button[data-active='true']]:border-frangipani-300 [&_button[data-active='true']]:border-b-0">
                     <Tabs.Tab value="overview">Overview</Tabs.Tab>
                     <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                     <Tabs.Tab value="invited">Invited</Tabs.Tab>
                   </Tabs.List>

                  <Tabs.Panel value="overview" className="[&>div]:w-full">
                      <JobDesc edit />
                  </Tabs.Panel>
                  <Tabs.Panel value="applicants">
                      <div className="mt-10 flex flex-wrap  justify-evenly gap-x-14 gap-y-10">
                {
                   talents.map((talent,index)=> index<6 &&<TalentCard key={index} {...talent} posted />)     
                }
               
            </div>
                  </Tabs.Panel>
                  <Tabs.Panel value="invited">
                       <div className="mt-10 flex flex-wrap  justify-evenly gap-x-14 gap-y-10">
                {
                   talents.map((talent,index)=> index<6 &&<TalentCard key={index} {...talent} invited/>)     
                }
                </div>
                  </Tabs.Panel>
                </Tabs>
     </div>
</div>


}

export default PostedJobDesc;