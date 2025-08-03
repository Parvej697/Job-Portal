import { Button, CheckIcon, Divider, FileInput, LoadingOverlay, Notification, NumberInput, Textarea, TextInput } from "@mantine/core"
import {  IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplyJobComp = () =>{
    const [preview , setPreview] =useState(false);
    const [submit,setSubmit]=useState(false);
     const [sec,setSec]=useState(5);
     const navigate =useNavigate();
    const handlePreview =()=>{
        setPreview(!preview);
        window.scrollTo({top:0,behavior:'smooth'})
    }

    const handleSubmit=()=> {
          setSubmit(true);
          let x=5;
          setInterval(()=>{
            x--;
            setSec(x);
            if(x==0)navigate('/find-jobs')

          }, 1000)
    }

return <> <div className="w-2/3 mx-auto">
       <LoadingOverlay className="!fixed" visible={submit} zIndex={1000} overlayProps={{ radius: "sm",color:"frangipani.3" , blur: 2 }} />
    <div className="flex justify-between ">
            <div className="flex gap-2 items-center">
                    <div className="p-3 bg-shiraz-600 rounded-xl">
                <img className="h-14 w-14" src={`/Icons/Google.png`} alt="" />
                    </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-2xl">Software engineer III</div>
                    <div className="text-lg text-shiraz-300">Google &bull; 3 days ago &bull; 12 Applicants</div>
                </div>
            </div>
        </div>
          <Divider color="frangipani.3" my="xl" size="xs"/>
          <div className="text-xl font-semibold mb-5">Submit Your Application</div>
          <div className="flex flex-col gap-5">
              <div className="flex gap-10 [&>*]:w-1/2">
                  <TextInput className={`[&_input]:bg-shiraz-800 [&_input]:placeholder-frangipani-200 ${preview ? "[&_input]:border-none [&_input]:text-shiraz-100"  : "[&_input]:border [&_input]:border-frangipani-300"}`} label="Full Name" withAsterisk placeholder="Enter name"/> 
                  <TextInput className={`[&_input]:bg-shiraz-800 [&_input]:placeholder-frangipani-200 ${preview ? "[&_input]:border-none [&_input]:text-shiraz-100"  : "[&_input]:border [&_input]:border-frangipani-300"}`} label="Email" withAsterisk placeholder="Enter email"/> 
              </div>
               <div className="flex gap-10 [&>*]:w-1/2">
                  <NumberInput className={`[&_input]:bg-shiraz-800 ${preview ? "[&_input]:border-none [&_input]:text-shiraz-100"  : "[&_input]:border [&_input]:border-frangipani-300"} [&_input]:placeholder-frangipani-200 ` } variant={preview?"unstyled":"default"} label="Phone Number" withAsterisk placeholder="Enter Phone Number" hideControls min={0} max={9999999999 } clampBehavior="strict" /> 
                  <TextInput readOnly={preview} className={`[&_input]:bg-shiraz-800 [&_input]:placeholder-frangipani-200 ${preview ? "[&_input]:border-none [&_input]:text-shiraz-100"  : "[&_input]:border [&_input]:border-frangipani-300"}`} label="Personal Website" withAsterisk placeholder="Enter Url"/> 
              </div>
              <FileInput className={`[&_.mantine-FileInput-input]:bg-shiraz-800 [&_.mantine-FileInput-input]:text-white ${preview ? "[&_.mantine-FileInput-input]:border-none [&_.mantine-FileInput-input]:text-shiraz-100"  : "[&_.mantine-FileInput-input]:border [&_.mantine-FileInput-input]:border-frangipani-300"}`} withAsterisk leftSection={<IconPaperclip stroke={1.5} className="text-frangipani-200" />} label="Attach your cv" placeholder="" leftSectionPointerEvents="none" />
              <Textarea className={`[&_textarea]:bg-shiraz-800 [&_textarea]:text-shiraz-200 [&_textarea]:placeholder-frangipani-200  ${ preview ? "[&_textarea]:border-none [&_textarea]:text-shiraz-100": "[&_textarea]:border [&_textarea]:border-frangipani-300" }`} withAsterisk placeholder="Type something about yourself..." label="Cover Letter" autosize minRows={4} />
             {!preview && <Button onClick={handlePreview}  color="frangipani.3" variant="light">Preview</Button>}
             {
                preview && <div className="flex gap-10 [&>*]:w-1/2">
                    <Button fullWidth onClick={handlePreview}  color="frangipani.3" variant="outline">Edit</Button>
                    <Button fullWidth onClick={handleSubmit}  color="frangipani.3" variant="light">Submit</Button>
                </div>
             }
          </div>
</div>
          <Notification className={`!border-frangipani-300 !fixed z-[1001] top-0 left-[35%] transition duration-300 ease-in-out ${submit?"translate-y-0":"-translate-y-20"} `} icon={<IconCheck size={20} />} color="teal" withBorder title="Application Submitted!" mt="md" withCloseButton={false}>
        Redirecting to Find Jobs in {sec} seconds...
      </Notification>
 </>
}
export default ApplyJobComp;

