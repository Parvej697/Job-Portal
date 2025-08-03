
import Companies from "../LandingPage/Companies";
import Dreamjob from "../LandingPage/DreamJob";
import JobCategory from "../LandingPage/JobCategory";
import Subscribe from "../LandingPage/Subscribe";
import Testimonial from "../LandingPage/Testimonial";
import Working from "../LandingPage/Working";

const HomePage =()=>{
     return(
      <div className="min-h-[100vh] bg-shiraz-800 font-[poppins] px-4">
         
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