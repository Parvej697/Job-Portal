import { formatDate } from "../../Services/Utilities";


const CertificateCard =(props:any)=>{
 return   <div className="flex justify-between  sm-mx:flex-wrap sm-mx:gap-2">
            <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-md shrink-0">
                <img className="h-7 w-7" src={`/Icons/${props.issuer}.png`} alt="" />
                    </div>
                <div className="flex flex-col">
                    <div className="font-semibold xs-mx:text-sm">{props.name}</div>
                    <div className="text-sm xs-mx:text-xs text-mine-shaft-300">{props.issuer}</div>
                </div>
            </div>
            <div className="flex flex-col items-end sm-mx:flex-row sm-mx:gap-2">
                <div className="text-sm xs-mx:text-xs text-mine-shaft-300">Issued {formatDate(props.issueDate)}</div>
                <div className="text-sm xs-mx:text-xs text-mine-shaft-300">ID: {props.certificateId}</div>
            </div>  
        </div>
     
}

export default CertificateCard;