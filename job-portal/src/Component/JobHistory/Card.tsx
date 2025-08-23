import { Button, Divider, Text } from "@mantine/core";
import {
  IconBookmark,
  IconBookmarkFilled,
  IconCalendarMonth,
  IconClockHour3,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { timeAgo } from "../../Services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";

const Card = (props: any) => {
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile);
  const handleSaveJob = () => {
    let savedJobs: any = [...profile.savedJobs];
    if (savedJobs?.includes(props.id)) {
      savedJobs = savedJobs?.filter((id: any) => id !== props.id);
    } else {
      savedJobs = [...savedJobs, props.id];
    }

    let updatedProfile = { ...profile, savedJobs: savedJobs };
    dispatch(changeProfile(updatedProfile));
  };

  const handleAccept = () => {
  console.log("Accepted job:", props.id);
  // Yahan API call karo ya Redux dispatch
  // dispatch(acceptJobAction(props.id));
};

const handleReject = () => {
  console.log("Rejected job:", props.id);
  // dispatch(rejectJobAction(props.id));
};
  return (
    <div className="bg-mine-shaft-900 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_green] !shadow-eucalyptus-400">
      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img
              className="h-7 w-7"
              src={`/Icons/${props.company}.png`}
              alt=""
            />
          </div>
          <div>
            <div className="font-semibold">{props.jobTitle}</div>
            <div className="text-xs text-mine-shaft-300">
              {props.company} &#x2022;{" "}
              {props.applicants ? props.applicants.length : 0} Applicants
            </div>
          </div>
        </div>
        <div>
          {profile.savedJobs?.includes(props.id) ? (
            <IconBookmarkFilled
              onClick={handleSaveJob}
              className="text-eucalyptus-400 cursor-pointer"
            />
          ) : (
            <IconBookmark
              onClick={handleSaveJob}
              className="text-shiraz-300 hover:text-eucalyptus-400 cursor-pointer"
            />
          )}
        </div>
      </div>
      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-eucalyptus-300 [&>div]:rounded-lg text-xs">
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
      </div>
      <Text className="!text-xs text-justify text-mine-shaft-300" lineClamp={3}>
        {props.about}
      </Text>
      <Divider color="mine-shaft.5" size="xs" />
      <div className="flex justify-between">
        <div className="font-semibold text-mine-shaft-300">
          &#8377;{props.packageOffered} LPA
        </div>
        <div className="flex gap-1 text-xs text-mine-shaft-300 items-center">
          <IconClockHour3 className="h-5 w-5" stroke={1.5} />{" "}
          {props.applied || props.interviewing
            ? "Applied "
            : props.offered
            ? "Interviwed"
            : "Posted "}
          {timeAgo(props.postTime)}
        </div>
      </div>
      {(props.offered || props.interviewing) && (
        <Divider color="mine-shaft.5" size="xs" />
      )}
      {props.offered && (
        <div className="flex gap-5 justify-around ">
          <div>
            <Button color="eucalyptus.4" variant="outline" onClick={handleAccept} fullWidth>
              Accept
            </Button>
          </div>
          <div>
            <Button color="eucalyptus.4" variant="light" onClick={handleReject} fullWidth>
              Reject
            </Button>
          </div>
        </div>
      )}
      {props.interviewing && (
        <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
          <IconCalendarMonth
            className="text-eucalyptus-300 w-5 h-5"
            stroke={1.5}
          />{" "}
          Sun, 25 August &bull;{" "}
          <span className="text-mine-shaft-300">10:00 AM</span>
        </div>
      )}
      <Link to={`/job/${props.id}`}>
        <Button fullWidth color="eucalyptus.4" variant="light">
          View Job
        </Button>
      </Link>
    </div>
  );
};

export default Card;
