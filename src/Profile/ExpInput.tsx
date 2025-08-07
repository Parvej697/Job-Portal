import { Button, Checkbox, Textarea } from "@mantine/core";
import { fields } from "../Data/Profile";
import SelectInputProfile from "./SelectInputProfile";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput=(props:any)=>{
    const[startDate,setStartDate] = useState<Date | null>(new Date());
    const[endDate,setEndDate] = useState<Date | null>(new Date());
     const[checked,setChecked]=useState(false);
    const select=fields;
    const [desc,setDesc]=useState("Leading a team of 4 developers to build a microservice-based ERP solution using Spring Boot and React. Optimized RESTful APIs for performance and collaborated with frontend team for feature rollout.");
   return <div className="flex flex-col gap-3">
    <div className="text-lg font-semibold">{props.add?"Add":"Edit"} Experience</div>
    <div className="flex gap-10 [&_input]:bg-shiraz-800 [&_input]:text-frangipani-200 [&_input]:border-frangipani-300 [&_input]:placeholder-shiraz-200 [&>*]:w-1/2">
        <SelectInputProfile {...select[0]}/>
        <SelectInputProfile {...select[1]}/>
        </div >
        <div className=" [&_input]:bg-shiraz-800 [&_input]:text-frangipani-200 [&_input]:border-frangipani-300 [&_input]:placeholder-shiraz-200">
        <SelectInputProfile  {...select[2]}/>
        </div>
        <Textarea withAsterisk label="Summary" className="[&_textarea]:bg-shiraz-800 [&_textarea]:border-frangipani-300 [&_textarea]:text-shiraz-200 [&_textarea]:placeholder-frangipani-200"
         autosize minRows={3} value={desc} placeholder="Enter Summary..." onChange={(event) => setDesc(event.currentTarget.value)}/>
        <div className="flex gap-10 [&_input]:bg-shiraz-800 [&_input]:text-frangipani-200 [&_input]:border-frangipani-300 [&_input]:placeholder-shiraz-200 [&>*]:w-1/2">
        <MonthPickerInput withAsterisk maxDate={endDate||undefined} className="" label="Start Date" placeholder="Pick Date" value={startDate} onChange={(value) => setStartDate(value as Date | null)} />
        <MonthPickerInput disabled={checked} withAsterisk minDate={startDate||undefined} maxDate={new Date()}className="" label="End Date" placeholder="Pick Date" value={endDate} onChange={(value) => setEndDate(value as Date | null)} />
        </div>
        <Checkbox checked={checked} onChange={(event)=>setChecked(event.currentTarget.checked)} className="[&_input]:bg-shiraz-800 [&_input]:border-frangipani-300" label={"Currently Working here."}/> 
            <div className="flex gap-5">
                        <Button onClick={()=>props.setEdit(false)} color="frangipani.3" variant="outline" >Save</Button>
                        <Button onClick={()=>props.setEdit(false)} color="blue.9" variant="light" >Cancel</Button>
                    </div>
   </div>
}
export default ExpInput;