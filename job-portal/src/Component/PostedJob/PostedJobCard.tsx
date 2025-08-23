import { Link, useParams } from "react-router-dom";
import { timeAgo } from "../../Services/Utilities";

const PostedJobCard = (props:any)=>{
    const {id}=useParams();
    return <Link to={`/posted-job/${props.id}`} className={` rounded-xl p-2 w-52 lg-mx:w-48 bs-mx:w-44
    border-l-2 hover:bg-opacity-80 cursor-pointer border-l-eucalyptus-500 ${props.id==id?"!bg-eucalyptus-500 !text-mine-shaft-200":"!bg-mine-shaft-700 !text-mine-shaft-200"}`}>
        <div className="text-sm font-semibold">{props.jobTitle}</div>
        <div className="text-xs  text-mine-shaft-300 font-medium">{props.location}</div>
        <div className="text-xs text-mine-shaft-300">{props.jobStatus=="DRAFT" ? "Drafted" :props.jobStatus=="CLOSED" ? "Closed" : "Posted"} {timeAgo(props.postTime)}</div>
    </Link>
}

export default PostedJobCard;