const PostedJobCard = (props:any)=>{
    return <div className="bg-shiraz-700 rounded-xl p-2 border-l-2 border-l-frangipani-300">
        <div className="text-sm font-semibold">{props.jobTitle}</div>
        <div className="text-xs  text-shiraz-300 font-medium">{props.location}</div>
        <div className="text-xs text-shiraz-300">{props.posted}</div>
    </div>
}

export default PostedJobCard;