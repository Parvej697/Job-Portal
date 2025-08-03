import { Divider, RangeSlider } from "@mantine/core";
import { dropdownData } from "../Data/JobsData";
import MultiSelector from "./MultiSelector";
import { useState } from "react";

const SearchBar=()=>{
    const [value,setValue] =useState<[number,number]>([1,100]);
return <div className="flex px-5 py-8 ">
    {
        dropdownData.map((item,index) =><> <div key={index} className="w-1/5">
            <MultiSelector {...item}/>
       </div>
       <Divider mr="xs" color="frangipani.3" size="xs" orientation="vertical"/>
       </>)
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