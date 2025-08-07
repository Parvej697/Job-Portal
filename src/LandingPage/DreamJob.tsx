import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const Dreamjob=()=>{
return <div className="flex items-center px-16 py-10">
         <div className="flex flex-col w-[45%] gap-3">
            <div className="text-6xl font-bold leading-tight text-shiraz-200">Let’s find your <span className="text-frangipani-300"> Dream</span>
         <span className="text-frangipani-300">Job</span> together</div>
        <div className="text-lg text-shiraz-300">Success begins with a dream job. Start finding yours from thousands of job options here</div>
        <div className="flex gap-3 mt-5">
            <TextInput className="bg-shiraz-700 rounded-lg py-1 px-2 text-frangipani-100 [&_input]:text-shiraz-100 [&_input]:placeholder-shiraz-200" variant="unstyled"label="Job Type" placeholder="Fulltime"/>
            <TextInput className="bg-shiraz-700 rounded-lg py-1 px-2 text-frangipani-100 [&_input]:text-shiraz-100 [&_input]:placeholder-shiraz-200" variant="unstyled"label="Job Title" placeholder="Software Engineer"/>
           <div className="flex items-center justify-center h-full w-20 bg-frangipani-400 text-shiraz-200 rounded-lg p-2 cursor-pointer hover:bg-frangipani-500">
            <IconSearch className="h-[85%] w-[85%] "/>
           </div>
        </div>
      </div>



    <div className="w-[55%] flex items-center justify-center">
       <div className="w-[30rem] relative">
           <img src="/boy1.png" alt="Boy" />
           <div className="absolute top-[55%] -right-10 w-fit border-frangipani-200 border rounded-lg p-2 backdrop-blur-md">
            <div className="text-center mb-1 text-sm text-shiraz-100 ">10k got job</div>
                <Avatar.Group>
                  <Avatar src="avatar.png" />
                  <Avatar src="avatar1.png" />
                  <Avatar src="avatar2.png" />
                  <Avatar>+9K</Avatar>
                </Avatar.Group>
           </div>
           <div className="absolute top-[25%] -left-20 w-fit border-frangipani-200 border rounded-lg p-2 backdrop-blur-md gap-1 flex flex-col">
              <div className="flex gap-2 items-center mb-3">
                  <div className="w-10 h-10 p-1 bg-shiraz-700 rounded-lg ">
                     <img src="/google.webp" alt="logo" />
                  </div>
                  <div className="text-sm text-shiraz-100">
                     <div>Software Engineer</div>
                     <div className="text-shiraz-200 text-xs">Delhi</div>
                  </div>
              </div>
              <div className="flex gap-2  justify-around text-xs text-shiraz-100">
                 <span>1 day ago</span>
                 <span>150 Applicants</span>
              </div>
           </div>
        </div>  
    </div>
</div>
}
export default Dreamjob;