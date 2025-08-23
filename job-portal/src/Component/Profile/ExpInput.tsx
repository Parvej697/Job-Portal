import { Button, Checkbox, Textarea } from "@mantine/core";
import { fields } from "../../Data/Profile";
import SelectInputProfile from "./SelectInputProfile";
import { useEffect } from "react";
import { MonthPickerInput } from "@mantine/dates";
import { isNotEmpty, useForm } from "@mantine/form";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/Notification";
import { useDispatch, useSelector } from "react-redux";

const ExpInput=(props:any)=>{
    const dispatch =useDispatch();
    const profile =useSelector((state:any)=>state.profile);
    const select=fields;
    
        useEffect(()=>{
            if(!props.add)form.setValues({title:props.title ,
                company:props.company,
                location:props.location,
                description:props.description,
                startDate:new Date(props.startDate),
                endDate:new Date(props.endDate),
                working:props.working
            })
        }, [] );


    const form=useForm({
        mode:'controlled',
        validateInputOnChange:true,
        initialValues:{
            title:'',
            company:'',
            location:'',
            description:'',
            startDate:new Date(),
            endDate:new Date(),
            working:false

        },
        validate:{
            title:isNotEmpty("Title is required"),
            company:isNotEmpty("Company is required"),
            location:isNotEmpty("Location is required"),
            description:isNotEmpty("Description is required"),
            
        }
    })
    const handleSave = () => {
    form.validate();
    if (!form.isValid()) return;

    let exp = [...profile.experiences];
    const values = form.getValues();

    // Safe conversion
   (values as any).startDate = values.startDate ? new Date(values.startDate).toISOString() : null;
(values as any).endDate = values.endDate ? new Date(values.endDate).toISOString() : null;


    if (props.add) {
        exp.push(values);
    } else {
        exp[props.index] = values;
    }

    let updatedProfile = { ...profile, experiences: exp };
    props.setEdit(false);
    dispatch(changeProfile(updatedProfile));
    successNotification("Success", `Experience ${props.add ? "Added" : "Updated"} Successfully.`);
};



   return <div className="flex flex-col gap-3">
    <div className="text-lg font-semibold">{props.add?"Add":"Edit"} Experience</div>
    <div className="flex gap-10 md-mx:gap-5 [&>*]:w-1/2 xs-mx:[&>*]:w-full xs-mx:flex-wrap my-3 ">
        <SelectInputProfile form={form} name="title" {...select[0]}/>
        <SelectInputProfile form={form} name="company" {...select[1]}/>
        </div >
        <div className="">
        <SelectInputProfile form={form} name="location" {...select[2]}/>
        </div>
        <Textarea {...form.getInputProps('description')} withAsterisk label="Summary" 
         autosize minRows={3} placeholder="Enter Summary..." />
        <div className="flex gap-10 md-mx:gap-5 [&>*]:w-1/2 xs-mx:[&>*]:w-full xs-mx:flex-wrap my-3 ">
        <MonthPickerInput {...form.getInputProps("startDate")} withAsterisk maxDate={form.getValues().endDate||undefined} className="" label="Start Date" placeholder="Pick Date" />
        <MonthPickerInput {...form.getInputProps("endDate")} disabled={form.getValues().working} withAsterisk minDate={form.getValues().startDate||undefined} maxDate={new Date()}className="" label="End Date" placeholder="Pick Date"/>
        </div>
        <Checkbox checked={form.getValues().working} onChange={(event)=>form.setFieldValue("working",event.currentTarget.checked)}  className="[&_input]:bg-shiraz-800 [&_input]:border-frangipani-300" label={"Currently Working here."}/> 
            <div className="flex gap-5">
                        <Button  onClick={handleSave} color="green.8" variant="light" >Save</Button>
                        <Button onClick={()=>props.setEdit(false)} color="red.8" variant="light" >Cancel</Button>
                    </div>
   </div>
}
export default ExpInput;