import { Button, NumberInput, TagsInput, Textarea } from "@mantine/core";
import { content, fields } from "../../Data/JobData";
import SelectInput from "./SelectInput";
import TextEditor from "./TextEditor";
import { isNotEmpty, useForm } from "@mantine/form";
import { getJob, postJob } from "../../Services/JobService";
import {
  errorNotification,
  successNotification,
} from "../../Services/Notification";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";

const PostJob = () => {
  const {id}=useParams();
  const[editorData,setEditorData]=useState(content);
  const user = useSelector((state: any) => state.user);
  const navigate = useNavigate();
  // const matches = useMediaQuery("(min-width: 350px)");


useEffect(() => {
  window.scrollTo(0, 0);
    if (id!=="0") {
      getJob(id)
        .then((res) => {
          form.setValues(res);
          setEditorData(res?.description);
        })
        .catch((err) => {
          console.log(err);
        });
    }else{
       form.reset();
       setEditorData(content);
    }
      
  }, [id]);

  const select = fields;
  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      jobTitle: "",
      company: "",
      experience: "",
      jobType: "",
      location: "",
      packageOffered: "",
      skillsRequired: [],
      about: "",
      description: content,
    },
    validate: {
      jobTitle: isNotEmpty("JobTitle is Required"),
      company: isNotEmpty("Company is Required"),
      experience: isNotEmpty("Experience is Required"),
      jobType: isNotEmpty("Job Type is Required"),
      location: isNotEmpty("Location is Required"),
      packageOffered: isNotEmpty("Package is Required"),
      skillsRequired: isNotEmpty("Skills are Required"),
      about: isNotEmpty("About is Required"),
      description: isNotEmpty("Description is Required"),
    },
  });

  const handlePost = () => {
    form.validate();
    if (!form.isValid()) return;
    postJob({ ...form.getValues(),id, postedBy: user?.id, jobStatus: "ACTIVE" })
      .then((res) => {
        console.log("API response:", res);
        successNotification("Success", "Job Posted Successfully");
        navigate(`/posted-job/${res?.id}`);
      })
      .catch((err) => {
        console.log(err);
        errorNotification("Error", err?.response?.data?.errorMessage);
      });
  };

  const handleDraft = () => {
    console.log("Form values:", form.getValues());
    postJob({ ...form.getValues(),id, postedBy: user?.id, jobStatus: "DRAFT" })
      .then((res) => {
        console.log("API response:", res);
        successNotification("Success", "Job Drafted Successfully");
        navigate(`/posted-job/${res?.id}`);
      })
      .catch((err) => {
        console.log(err);
        errorNotification("Error", err?.response?.data?.errorMessage);
      });
  };

  return (
    <div className="px-16 bs-mx:px-10 md-mx:px-5 py-5">
      <div className="text-2xl font-semibold mb-5">Post a Job</div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10 md-mx:gap-5 [&>*]:w-1/2 sm-mx:flex-wrap sm-mx:[&>*]:!w-full">
          <SelectInput form={form} name="jobTitle" {...select[0]} />
          <SelectInput form={form} name="company" {...select[1]} />
        </div>
        <div className="flex gap-10  md-mx:gap-5 [&>*]:w-1/2 sm-mx:flex-wrap sm-mx:[&>*]:!w-full">
          <SelectInput form={form} name="experience" {...select[2]} />
          <SelectInput form={form} name="jobType" {...select[3]} />
        </div>
        <div className="flex gap-10 md-mx:gap-5 [&>*]:w-1/2 sm-mx:flex-wrap sm-mx:[&>*]:!w-full">
          <SelectInput form={form} name="location" {...select[4]} />
          <NumberInput
            {...form.getInputProps("packageOffered")}
            label="Salary"
            min={1}
            max={300}
            clampBehavior="strict"
            placeholder="Enter Salary"
            hideControls
            withAsterisk
          />
        </div>
        <TagsInput
          {...form.getInputProps("skillsRequired")}
          withAsterisk
          label="Skills"
          placeholder="Enter skill"
          clearable
          acceptValueOnBlur
          splitChars={[",", " ", "|"]}
        />
        <Textarea
          {...form.getInputProps("about")}
          withAsterisk
          label="About Job"
          className="my-3"
          autosize
          minRows={3}
          placeholder="Enter About Job..."/>
        <div className="[&_button[data-active='true']]:!text-eucalyptus-400 [&_button[data-active='true']]:!bg-eucalyptus-400/20  ">
          <div className="  text-sm font-medium">
            Job Description <span className="text-red-600">*</span>
          </div>
          <TextEditor form={form} data={editorData} />
        </div>
        <div className=" flex gap-4">
          <Button color="eucalyptus.4" onClick={handlePost} variant="light">
            Publish Job{" "}
          </Button>
          <Button color="eucalyptus.4" onClick={handleDraft} variant="light">
            Save As Draft{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
