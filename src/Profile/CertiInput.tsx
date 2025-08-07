import { Button, TextInput } from "@mantine/core";
import SelectInputProfile from "./SelectInputProfile";
import { fields } from "../Data/Profile";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";

const CertiInput=(props:any)=>{
     const[issueDate,setIssueDate] = useState<Date | null>(new Date());
    const select=fields;
   return <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">Add Certificate</div>
            <div><div className="flex gap-10 [&_input]:bg-shiraz-800 [&_input]:text-frangipani-200 [&_input]:border-frangipani-300 [&_input]:placeholder-shiraz-200 [&>*]:w-1/2">
        <TextInput label="Title" withAsterisk placeholder="Enter Title"/>
        <SelectInputProfile {...select[1]}/>
        </div>
         <div className="flex gap-10 [&_input]:bg-shiraz-800 [&_input]:text-frangipani-200 [&_input]:border-frangipani-300 [&_input]:placeholder-shiraz-200 [&>*]:w-1/2">
                <MonthPickerInput withAsterisk maxDate={new Date()} className="" label="issue Date" placeholder="Pick Date" value={issueDate} onChange={(value) => setIssueDate(value as Date | null)} />
                <TextInput label="Certificate ID" withAsterisk placeholder="Enter ID"/>
                </div>
        <div className="flex gap-5 mt-5">
              <Button onClick={()=>props.setEdit(false)} color="frangipani.3" variant="outline" >Save</Button>
              <Button onClick={()=>props.setEdit(false)} color="blue.9" variant="light" >Cancel</Button>
        </div> </div>
   </div>
}
export default CertiInput;