import { ActionIcon } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

const CompanyCard = (props:any) =>{
 return <div>
    <div className="flex justify-between bg-shiraz-700 items-center rounded-lg p-2 ">
            <div className="flex gap-2 items-center">
                    <div className="p-2 bg-shiraz-600 rounded-md">
                <img className="h-7 w-7" src={`Icons/${props.name}.png`} alt="" />
                    </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold">{props.name}</div>
                    <div className="text-xs text-shiraz-200">{props.employees} Employees</div>
                </div>
            </div>
                <ActionIcon color="frangipani.3" variant="subtle" aria-label="Settings" >
                    <IconExternalLink stroke={1.5} />
                </ActionIcon>
            
        </div>
 </div>
}
export default CompanyCard;