import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../Data/Data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const JobCategory=()=>{
    return <div className="mt-20 pb-5">
     <div className="text-4xl text-center font-semibold mb-3 text-shiraz-100">Browse
        <span className="text-frangipani-200"> Job</span> Category</div>

        <div className="text-lg mb-10 mx-auto text-shiraz-200 text-center w-1/2">Explaore diverse job oppotunities 
        tailored to your skills.Start your career journey today!</div>
          
          <Carousel slideSize="22%" slideGap="md"emblaOptions={{loop: true,  align: 'center'}} className="focus-visible:[&_button]:!outline-none 
          [&_button]:!bg-shiraz-200 [&_button]:!border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opac"
             nextControlIcon={<IconArrowRight className="h-8 w-8" />}
      previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
    >      
      {
        jobCategory.map((category,index) =><Carousel.Slide>
                  <div className="flex flex-col items-center w-64 gap-2 border border-shiraz-200 p-5 rounded-xl
                   hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out !shadow-shiraz-300">
            <div className="p-2 bg-frangipani-300 rounded-full ">
                <img className="h-8 w-8" src={`/Category/${category.name}.png`} alt={category.name} />
            </div>

            <div className="text-shiraz-200 text-xl">{category.name}</div>
            <div className="text-sm text-center text-shiraz-300">{category.desc}</div>
            <div className="text-frangipani-200 text-lg">{category.jobs} New Job Posted</div>
        </div>
        </Carousel.Slide>)
    }   
    </Carousel>
       
    </div>


}
export default JobCategory;