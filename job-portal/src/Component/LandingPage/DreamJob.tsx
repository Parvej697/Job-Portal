import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const Dreamjob=()=>{
return <div className="flex sm-mx:flex-col-reverse items-center px-16 py-10 bs-mx:px-10 md-mx:px-5">
         <div className="flex flex-col w-[45%] sm-mx:w-full gap-3">
            <div className="text-6xl bs-mx:text-5xl md-mx:text-4xl sm-mx:text-3xl font-bold leading-tight text-mine-shaft-100">Let’s find your <span className="text-eucalyptus-400"> Dream</span>
         <span className="text-eucalyptus-400">Job</span> together</div>
        <div className="text-lg md-mx:text-base sm-mx:text-sm text-mine-shaft-200">Success begins with a dream job. Start finding yours from thousands of job options here</div>
        <div className="flex gap-3 mt-5 items-center">
            <TextInput className="bg-mine-shaft-900 rounded-lg py-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100 " variant="unstyled"label="Job Type" placeholder="Fulltime"/>
            <TextInput className="bg-mine-shaft-900 rounded-lg py-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100 " variant="unstyled"label="Job Title" placeholder="Software Engineer"/>
           <div className="flex  items-center justify-center h-full w-20 bg-eucalyptus-500 text-mine-shaft-300 rounded-lg p-2 cursor-pointer hover:bg-eucalyptus-500">
            <IconSearch className="h-[85%] w-[85%] "/>
           </div>
        </div>
      </div>



    <div className="w-[55%] sm-mx:ml-5 sm-mx:w-full flex items-center justify-center">
       <div className="w-[30rem] relative">
           <img src="/boy1.png" alt="Boy" />
           <div className="absolute top-[55%] xs-mx:top-[4%]  -right-10 xs-mx:-left-11 bs-mx:right-0 w-fit border-eucalyptus-400 border rounded-lg p-2 backdrop-blur-md">
            <div className="text-center mb-1 text-sm  text-mine-shaft-300 ">10k got job</div>
                <Avatar.Group >
                  <Avatar size={35} src="avatar.png" />
                  <Avatar size={35} src="avatar1.png" />
                  <Avatar size={35} src="avatar2.png" />
                  <Avatar>+9K</Avatar>
                </Avatar.Group>
           </div>
           <div className="absolute top-[25%] xs-mx:top-[65%] xs:-left-20 bs-mx:top-[35%] w-fit border-eucalyptus-400 xs-mx:-right-10  border rounded-lg p-2 xs-mx:p-1 backdrop-blur-md gap-1 xs-mx:gap-0  flex flex-col">
              <div className="flex gap-2 items-center mb-3">
                  <div className="w-10 h-10 xs-mx:w-7 xs-mx:h-7 p-1 bg-mine-shaft-900 rounded-lg ">
                     <img src="/google.webp" alt="logo" />
                  </div>
                  <div className="text-sm xs-mx:text-xs text-mine-shaft-300">
                     <div>Software Engineer</div>
                     <div className="text-mine-shaft-300 text-xs">Delhi</div>
                  </div>
              </div>
              <div className="flex gap-2 justify-around text-xs  text-mine-shaft-300">
                 <span>1 day ago</span>
                 <span >150 Applicants</span>
              </div>
           </div>
        </div>  
    </div>
</div>
}
export default Dreamjob;