import { Button, Collapse, Divider, Input, RangeSlider } from "@mantine/core";


import { useState } from "react";

import { searchFields } from "../../Data/JobTalent";
import { IconUserCircle } from "@tabler/icons-react";
import MultiSelector from "../FindJobs/MultiSelector";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../Slices/FilterSlice";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

const SearchBar=()=>{
   const matches = useMediaQuery('(max-width: 475px)');
   const[opened,{toggle}] =useDisclosure(false);
    const dispatch = useDispatch();
    const [value,setValue] =useState<[number,number]>([0,50]);
    const [name,setName] = useState("");

    const handleChange=(name:any,event:any)=>{
          if(name=="exp") dispatch(updateFilter({exp:event}));
          else{
            dispatch(updateFilter({name:event.target.value}));
             setName(event.target.value);
          }
    }
return (<div>
    <div className="flex justify-end">
           {
           matches &&<Button variant="outline" m="sm" radius="xl"
            autoContrast color="eucalyptus.4" onClick={toggle}>{opened?"Close": "Filters"}</Button>
            }
    </div>
<Collapse in={(opened || !matches)}>
<div className="flex px-5 py-8 lg-mx:!flex-wrap items-center !text-mine-shaft-100 ">
         <div className="w-1/5 lg-mx:w-1/4 bs-mx:w-[30%] sm-mx:w-[48%] xs-mx:w-full xs-mx:mb-1 flex items-center">
            <div className="text-eucalyptus-400 bg-mine-shaft-900 rounded-full p-1 mr-2">
                <IconUserCircle size={24}/>
                </div>
               <Input defaultValue={name} onChange={(e) => handleChange("name", e)} className="[&_input]:!placeholder-mine-shaft-300 " variant="unstyled" placeholder="Talent Name" /> 
         </div>
     
    {
       searchFields.map((item,index) =>{
            return<> <div key={index} className="w-1/5 lg-mx:w-1/4 bs-mx:w-[30%] sm-mx:w-[48%] xs-mx:w-full xs-mx:mb-1">
            <MultiSelector title={item.title} icon={item.icon} options={item.options}/>
       </div>
       <Divider className="sm-mx:hidden" mr="xs" color="mine-shaft.8" size="xs" orientation="vertical"/>
       </>
})
    }
     <div className="w-1/5  lg-mx:w-1/4 lg-mx:mt-7  bs-mx:w-[30%] text-sm sm-mx:w-[48%] xs-mx:w-full xs-mx:mb-1 text-mine-shaft-300  [&_.mantine-Slider-label]:!translate-y-10">
     <div className="flex mb-1 text-sm justify-between">
        <div>Experience (Year)</div>
        <div>{value[0]}  - {value[1]} </div>
     </div>
        <RangeSlider size="xs" minRange={1} onChangeEnd={(e)=>handleChange("exp",e)} color="eucalyptus.4" min={0} max={50} value={value} onChange={setValue} labelTransitionProps={{
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