import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ApplyJobComp from "../Component/ApplyJob/ApplyJobComp";
import { useEffect, useState } from "react";
import { getJob } from "../Services/JobService";





const ApplyJobPage =() =>{
    const navigate =useNavigate();
     const {id}=useParams();
    const [job,setJob] =useState<any>(null);
   
    useEffect(()=>{
        window.scrollTo(0,0);
        getJob(id).then((res)=>{
            setJob(res);
        }).catch((err)=>{
            console.log(err);
        })
    }, [id])
return (
<div className="min-h-[90vh]  bg-mine-shaft-950 font-[poppins] px-4">

            <Button className="mt-6" leftSection={<IconArrowLeft size={20} />} onClick={()=>navigate(-1)} color="eucalyptus.4" mb="sm" variant="light">Back</Button>

            <ApplyJobComp {...job}/>
</div>
)
}
export default ApplyJobPage;