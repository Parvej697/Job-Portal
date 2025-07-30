import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../Data/Data";

const Testimonial = () =>{
 return<div className="mt-20 pb-5">
     <div className="text-4xl text-center font-semibold mb-3 text-shiraz-100">What
        <span className="text-frangipani-200"> User</span> says about us?</div>
    <div className="flex justify-evenly">
    {
        testimonials.map((data,index)=><div key={index} className="flex flex-col gap-3 w-[23%] border-frangipani-200 border p-3 rounded-xl mt-10">
        <div className="flex gap-2 items-center">
           <Avatar className="!h-14 !w-14" src="avatar.png" alt="it's me"/>
           <div>
              <div className="text-lg font-semibold text-shiraz-100">{data.name}</div>
              <Rating value={data.rating} fractions={2} readOnly/>
           </div>
        </div>
        <div className="text-xs text-shiraz-200">{data.testimonial}</div>
    </div>)
    }
    </div>
 </div>
}
export default Testimonial;