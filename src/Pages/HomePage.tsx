import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Companies from "../LandingPage/Companies";
import Dreamjob from "../LandingPage/DreamJob";
import JobCategory from "../LandingPage/JobCategory";
import Subscribe from "../LandingPage/Subscribe";
import Testimonial from "../LandingPage/Testimonial";
import Working from "../LandingPage/Working";

const HomePage =()=>{
     return(
      <div className="min-h-[100vh] bg-shiraz-800 font-[poppins]">
         <Header/>
         <Dreamjob/> 
         <Companies/>
         <JobCategory/>
         <Working/>
         <Testimonial/>
         <Subscribe/>
         <Footer/>
      </div>
        
     )
}
export default HomePage;