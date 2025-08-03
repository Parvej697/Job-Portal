import {  Tabs } from "@mantine/core";
import { jobList } from "../Data/JobsData";
import Card from "./Card";

const JobHistory = () =>{
return <div>
    <div className="text-2xl font-semibold mb-5 ">Job History</div>
      <div>
                <Tabs variant="light" radius="lg" defaultValue="about">
                   <Tabs.List className="border-b-2 mb-5 border-frangipani-300 [&_button]:!text-lg [&_button]:font-semibold [&_button[data-active='true']]:text-frangipani-300 [&_button[data-active='true']]:border-frangipani-300 [&_button[data-active='true']]:border-b-0">
                     <Tabs.Tab value="applied">Applied</Tabs.Tab>
                     <Tabs.Tab value="saved">Saved</Tabs.Tab>
                     <Tabs.Tab value="offered">Offered</Tabs.Tab>
                      <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
                   </Tabs.List>

                  <Tabs.Panel  value="applied">
                     <div className="mt-10 flex flex-wrap justify-around gap-5">
                 {
                jobList.map((job,index) => <Card key={index} {...job} applied /> ) 
            }
            </div>
                  </Tabs.Panel>
                  <Tabs.Panel value="saved">
                     <div className="mt-10 flex flex-wrap justify-around gap-5">
                 {
                jobList.map((job,index) => <Card key={index} {...job} saved/> ) 
            }
            </div>
                  </Tabs.Panel>
                  <Tabs.Panel value="offered">
                     <div className="mt-10 flex flex-wrap justify-around gap-5">
                 {
                jobList.map((job,index) => <Card key={index} {...job} /> ) 
            }
            </div>
                  </Tabs.Panel>
                  <Tabs.Panel value="interviewing">
                     <div className="mt-10 flex flex-wrap justify-around gap-5">
                 {
                jobList.map((job,index) => <Card key={index} {...job} /> ) 
            }
            </div>
                  </Tabs.Panel>
                </Tabs>
            </div>
</div>
}
export default JobHistory;