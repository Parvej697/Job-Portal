import { IconBrandFacebook, IconBrandInstagram, IconBrandX, IconDeviceImacSearch } from "@tabler/icons-react";
import { footerLinks } from "../Data/Data";
import { Divide } from "tabler-icons-react";

const Footer =()=>{
return <div className=" mt-20 pb-5 flex gap-5 justify-around">
          <div className="w-1/4 flex flex-col gap-4">
              
                  <div className="flex  gap-3 items-center text-frangipani-200 ">
                     <IconDeviceImacSearch className="h-7 w-7"  stroke={1.5}/>
                     <div className="text-xl font-semibold"> JobFinder</div>
                  </div>
                  <div className="text-sm text-shiraz-200">
                    Job portal with user profiles , skills updates , certifications, work experience and admin
                    job postings. 
                  </div>
                  <div className="flex gap-3 text- text-frangipani-200 [&>div]:bg-shiraz-700 
                  [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-shiraz-600 ">
                     <div><IconBrandFacebook/></div>
                     <div><IconBrandInstagram/></div>
                     <div><IconBrandX/></div>
                  </div>
          </div>
          {
            footerLinks.map((item,index) => <div key={index}>
                <div className="text-lg font-semibold mb-4 text-text-frangipani-200">{item.title}</div>
                {
                    item.links.map((link,index)=> <div key={index} className="text-shiraz-200 text-sm hover:text-frangipani-300 
                    cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out">{link}</div> )
                }
            </div>)
          }
       </div>
}
export default Footer;