import Companies from "../Component/LandingPage/Companies";
import Dreamjob from "../Component/LandingPage/DreamJob";
import JobCategory from "../Component/LandingPage/JobCategory";
import Subscribe from "../Component/LandingPage/Subscribe";
import Testimonial from "../Component/LandingPage/Testimonial";
import Working from "../Component/LandingPage/Working";

const HomePage =()=>{
     return(
      <div className="min-h-[100vh] bg-mine-shaft-950 font-[poppins] px-4 ">
         
         <Dreamjob/> 
         <Companies/>
         <JobCategory/>
         <Working/>
         <Testimonial/>
         <Subscribe/>
         
      </div>
        
     )
}
export default HomePage;