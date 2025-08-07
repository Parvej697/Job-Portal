import { Avatar, Divider, Tabs } from "@mantine/core";
import {  IconMapPin } from "@tabler/icons-react";
import AboutCom from "./AboutCom";
import CompanyJob from "./CompanyJob";
import CompanyEmployee from "./CompanyEmployee";

const Company =() =>{
    
return <div className="w-3/4 ml-0 mr-auto pl-0">
     <div className="relative ">
              <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
              <img className="rounded-3xl bg-shiraz-800 h-36 w-36 -bottom-1/4 absolute left-5 border-shiraz-800 border-8 p-2" src="/Icons/Google.png" alt="" />
              </div>
              <div className="px-3 mt-12">
                <div className="text-3xl font-semibold flex justify-between" >Google<Avatar.Group>
                   <Avatar src="avatar.png" />
                   <Avatar src="avatar1.png" />
                   <Avatar src="avatar2.png" />
                   <Avatar>+10K</Avatar>
                  </Avatar.Group>
                </div> 
                  <div className="flex gap-1 text-lg text-shiraz-300 items-center">
               <IconMapPin className="h-5 w-5" stroke={1.5}/>Delhi, India
            </div>
            <Divider color="frangipani.3"  mx="xs" my="xl" />
            <div>
                <Tabs  variant="light" radius="lg" defaultValue="about">
                   <Tabs.List className="border-b-2 mb-5 border-frangipani-300 [&_button]:!text-lg [&_button]:font-semibold [&_button[data-active='true']]:text-frangipani-300 ">
                     <Tabs.Tab value="about">About</Tabs.Tab>
                     <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
                     <Tabs.Tab value="employees">Employees</Tabs.Tab>
                   </Tabs.List>

                  <Tabs.Panel value="about"><AboutCom/></Tabs.Panel>
                  <Tabs.Panel value="jobs"><CompanyJob/></Tabs.Panel>
                  <Tabs.Panel value="employees"><CompanyEmployee/></Tabs.Panel>
                </Tabs>
            </div>
           </div>
           
</div>

}
export default Company;