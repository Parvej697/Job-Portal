import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import {  useNavigate } from "react-router-dom";
import Company from "../Component/CompanyProfile/Company";
import SimilarCompany from "../Component/CompanyProfile/SimilarCompanies";

const CompanyPage = () =>{
    const navigate =useNavigate();
 return <div className="min-h-[90vh]  bg-mine-shaft-950 font-[poppins] px-4">
            <Button leftSection={<IconArrowLeft size={20} />} color="frangipani.3" my="md" onClick={()=>navigate(-1)} variant="light">Back</Button>
            <div className="flex gap-5 justify-between">
                 <Company/> 
                 <SimilarCompany/>
            </div>

</div>
}
 export default CompanyPage;