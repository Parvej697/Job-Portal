import { Button, Collapse, Divider, RangeSlider } from "@mantine/core";
import { dropdownData } from "../../Data/JobsData";
import MultiSelector from "./MultiSelector";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../Slices/FilterSlice";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import React from "react";

const SearchBar=()=>{
    const matches = useMediaQuery('(max-width: 475px)');
    const[opened,{toggle}] =useDisclosure(false);
   const dispatch = useDispatch();
    const [value,setValue] =useState<[number,number]>([1,300]);

    const handleChange=(event:any)=>{
           dispatch(updateFilter({salary:event}));  
    }
return ( <div>
    <div className="flex justify-end">
           {
           matches &&<Button variant="outline" m="sm" radius="xl"
            autoContrast color="eucalyptus.4" onClick={toggle}>{opened?"Close": "Filters"}</Button>
            }
    </div>
<Collapse in={(opened || !matches)}>
<div className="flex items-center lg-mx:!flex-wrap !text-mine-shaft-100 px-5 py-8 ">
    {
        dropdownData.map((item,index) =><React.Fragment key={index}> <div key={index} className="w-1/5 lg-mx:w-1/4 bs-mx:w-[30%] sm-mx:w-[48%] xs-mx:w-full xs-mx:mb-1">
            <MultiSelector title={item.title} icon={item.icon} options={item.options}/>
       </div>
       <Divider className="sm-mx:hidden" mr="xs" color="mine-shaft.8" size="xs" orientation="vertical"/>
       </React.Fragment>)
    }
     <div className="w-1/5 lg-mx:w-1/4 lg-mx:mt-7  bs-mx:w-[30%] text-sm sm-mx:w-[48%] xs-mx:w-full xs-mx:mb-1 text-mine-shaft-300 [&_.mantine-Slider-label]:!translate-y-10">
     <div className="flex mb-1 justify-between">
        <div>Salary</div>
        <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
     </div>
        <RangeSlider size="xs" min={1} max={300} color="eucalyptus.4" value={value} onChange={setValue} onChangeEnd={handleChange} labelTransitionProps={{
            transition:'skew-down',
            duration:150,
            timingFunction:'linear'
        }} />
     </div>
</div>
</Collapse>
</div>
)
}

export default SearchBar;