import { Divider, Input, RangeSlider } from "@mantine/core";
import { dropdownData } from "../Data/JobsData";

import { useState } from "react";

import { searchFields } from "../Data/JobTalent";
import { IconUserCircle } from "@tabler/icons-react";
import MultiSelector from "../FindJobs/MultiSelector";

const SearchBar=()=>{
    const [value,setValue] =useState<[number,number]>([1,100]);
return <div className="flex px-5 py-8 items-center ">
         <div className="flex items-center">
            <div className="text-frangipani-300 bg-shiraz-800 rounded-full p-1 mr-2">
                <IconUserCircle size={24}/>
                </div>
               <Input className="[&_input]:placeholder-shiraz-200" variant="unstyled" placeholder="Talent Name" /> 
         </div>
     
    {
       searchFields.map((item,index) =>{
            return<> <div key={index} className="w-1/5">
            <MultiSelector {...item}/>
       </div>
       <Divider mr="xs" color="frangipani.3" size="xs" orientation="vertical"/>
       </>
})
    }
     <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
     <div className="flex text-sm justify-between">
        <div>Salary</div>
        <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
     </div>
        <RangeSlider size="xs" color="frangipani.3" value={value} onChange={setValue} labelTransitionProps={{
            transition:'skew-down',
            duration:150,
            timingFunction:'linear'
        }} />
     </div>
</div>
}
export default SearchBar;