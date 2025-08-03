import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import ApplyJobComp from "../ApplyJob/ApplyJobComp";




const ApplyJobPage =() =>{
return (
<div className="min-h-[90vh]  bg-shiraz-800 font-[poppins] px-4">
            <Link className="my-5 inline-block" to="/job" >
            <Button leftSection={<IconArrowLeft size={20} />} color="frangipani.3" variant="light">Back</Button>
            </Link>
            <ApplyJobComp/>
</div>
)
}
export default ApplyJobPage;