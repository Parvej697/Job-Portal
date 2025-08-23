import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../../Data/Data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const JobCategory=()=>{
    return <div className="mt-20 pb-5">
     <div className="text-4xl md-mx:text-3xl sm-mx:text-2xl xs-mx:text-xl text-center font-semibold mb-3 text-mine-shaft-200">Browse
        <span className="text-eucalyptus-500"> Job</span> Category</div>

        <div className="text-lg sm-mx:text-base xs-mx:text-sm mb-10 mx-auto text-mine-shaft-200 text-center w-1/2 sm-mx:w-11/12">Explore diverse job opportunities
        tailored to your skills.Start your career journey today!</div>
          
          <Carousel slideSize="22%" slideGap="md"emblaOptions={{loop: true,  align: 'center'}} className="focus-visible:[&_button]:!outline-none 
          [&_button]:!bg-eucalyptus-400 [&_button]:!border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100"
             nextControlIcon={<IconArrowRight className="h-8 w-8" />}
      previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
    >      
      {
        jobCategory.map((category,index) =><Carousel.Slide>
                  <div className="flex flex-col items-center w-64 sm-mx:w-56 xs-mx:w-48 gap-2 border border-mine-shaft-200 p-5 rounded-xl
                   hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out !shadow-mine-shaft-300">
            <div className="p-2 bg-eucalyptus-500 rounded-full ">
                <img className="h-8 w-8 sm-mx:h-6 sm-mx:w-6 xs-mx:h-4 xs-mx:w-4" src={`/Category/${category.name}.png`} alt={category.name} />
            </div>

            <div className="text-mine-shaft-200 text-xl sm-mx:text-lg xs-mx:text-base">{category.name}</div>
            <div className="text-sm xs-mx:text-xs text-center text-mine-shaft-300">{category.desc}</div>
            <div className="text-eucalyptus-400 text-lg sm-mx:text-base xs-mx:text-sm">{category.jobs} New Job Posted</div>
        </div>
        </Carousel.Slide>)
    }   
    </Carousel>
       
    </div>


}
export default JobCategory;