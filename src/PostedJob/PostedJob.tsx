import { Tabs } from "@mantine/core";
import PostedJobCard from "./PostedJobCard";
import { activeJobs } from "../Data/PostedJobData";

const PostedJob = () =>{
  return <div className="w-1/6 mt-5" >
     <div className="text-2xl font-semibold mb-5 ">Jobs</div>
     <div>
            <Tabs  autoContrast variant="pills" radius="lg" defaultValue="active">
                   <Tabs.List className=" [&_button[Area-selected='false']]:bg-shiraz-700 font-medium ">
                     <Tabs.Tab value="active">Active [4]</Tabs.Tab>
                     <Tabs.Tab value="draft">Draft [1]</Tabs.Tab>
                   </Tabs.List>

                  <Tabs.Panel value="active">
                    <div className="flex flex-col gap-5 mt-5">
                      {
                        activeJobs.map((item,index) => <PostedJobCard key={index} {...item}/>)
                      }
                    </div>
                  </Tabs.Panel>
                  <Tabs.Panel value="draft">S</Tabs.Panel>
            </Tabs>
     </div>
  </div>

}
export default PostedJob; 