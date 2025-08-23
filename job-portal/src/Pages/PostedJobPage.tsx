import { useNavigate, useParams } from "react-router-dom";
import PostedJob from "../Component/PostedJob/PostedJob";
import PostedJobDesc from "../Component/PostedJob/PostedJobDesc";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getJobsPostedBy } from "../Services/JobService";
import { Button, Drawer } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

const PostedJobPage = () => {
  const [opened, {open,close}] = useDisclosure(false);
  const matches = useMediaQuery("(max-width: 767px)");
  const {id} =useParams();
  const navigate = useNavigate();
  const user=useSelector((state:any)=>state.user);
  const[jobList,setJobList] =useState<any[]>([]);
  const [job, setJob] = useState<any>({});

  useEffect(()=>{
    window.scrollTo(0,0);
    getJobsPostedBy(user?.id).then((res)=>{
      setJobList(res);
      if(res && res.length>0 && Number(id) == 0)
        navigate(`/posted-job/${res[0].id}`);
      setJob(res.find((item:any)=>item.id==id));
    }).catch((err)=>{
      console.log(err);
    })
  }, [id])
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-[poppins] px-5 ">
     {matches && <Button my="xs" color="eucalyptus.4" size={"sm"} autoContrast  onClick={open}>All Jobs</Button>}
      <Drawer  size={230} overlayProps={{backgroundOpacity:0.5,blur:4}} opened={opened} onClose={close} title="All Jobs">
        <PostedJob job={job} jobList={jobList} />
      </Drawer>
      <div className="flex gap-5">
       {!matches && <PostedJob job={job} jobList={jobList} />}
        <PostedJobDesc {...(job || {})} />
      </div>
    </div>
  );
};

export default PostedJobPage;
