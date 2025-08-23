import {
  Button,
  FileInput,
  LoadingOverlay,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { getBase64 } from "../../Services/Utilities";
import { applyJob } from "../../Services/JobService";
import { useNavigate, useParams } from "react-router-dom";
import {
  errorNotification,
  successNotification,
} from "../../Services/Notification";
import { useSelector } from "react-redux";

const ApplicationForm = () => {
  const user = useSelector((state: any) => state.user);
  const { id } = useParams();
  const navigate = useNavigate();
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const handlePreview = () => {
    form.validate();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (!form.isValid()) return;
    setPreview(!preview);
  };

  const handleSubmit = async () => {
    if (!user || !user.id) {
      errorNotification("Error", "You must be logged in to apply for a job.");
      return;
    }
    setSubmit(true);
    let resume: any = await getBase64(form.getValues().resume);
    let applicant = {
      ...form.getValues(),
      applicantId: user.id,
      resume: resume.split(",")[1],
    };
    applyJob(id, applicant)
      .then((res) => {
        setSubmit(false);
        successNotification("Success", "Application Submitted Successfully.");
        navigate("/job-history");
      })
      .catch((err) => {
        setSubmit(false);
        errorNotification("Error", err.response.data.errormessage);
      });
  };

  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      name: "",
      email: "",
      phone: "",
      website: "",
      resume: null,
      coverLetter: "",
    },
    validate: {
      name: isNotEmpty("Name is required"),
      email: isNotEmpty("Email is required"),
      phone: isNotEmpty("Phone Number is required"),
      website: isNotEmpty("Website  is required"),
      resume: isNotEmpty("Resume  is required"),
    },
  }); 

  return (
    <div className="pb-5">
      <LoadingOverlay
        className="!fixed"
        visible={submit}
        zIndex={1000}
        overlayProps={{ radius: "sm", color: "eucalyptus.4", blur: 2 }}
      />
      <div className="text-xl font-semibold mb-5">Submit Your Application</div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-7 md-mx:gap-5 [&>*]:w-1/2 sm-mx:[&>*]:w-full sm-mx:flex-wrap">
          <TextInput
            {...form.getInputProps("name")}
            readOnly={preview}
            className={` ${
              preview
                ? " text-mine-shaft-300 font-semibold"
                : ""
            }`}
            variant={preview ? "unstyled" : "default"}
            label="Full Name"
            withAsterisk
            placeholder="Enter name"
          />
          <TextInput
            {...form.getInputProps("email")}
            variant={preview ? "unstyled" : "default"}
             readOnly={preview}
            className={` ${
              preview
                ? " text-mine-shaft-300 font-semibold"
                : ""
            }`}
            label="Email"
            withAsterisk
            placeholder="Enter email"
          />
        </div>
        <div className="flex gap-10 md-mx:gap-5 [&>*]:w-1/2 sm-mx:[&>*]:w-full sm-mx:flex-wrap">
          <NumberInput
            {...form.getInputProps("phone")}
             variant={preview ? "unstyled" : "default"}
             readOnly={preview}
            className={` ${
              preview
                ? " text-mine-shaft-300 font-semibold"
                : ""
            }`}
            label="Phone Number"
            withAsterisk
            placeholder="Enter Phone Number"
            hideControls
            min={0}
            max={9999999999}
            clampBehavior="strict"
          />
          <TextInput
            {...form.getInputProps("website")}
            variant={preview ? "unstyled" : "default"}
             readOnly={preview}
            className={` ${
              preview
                ? " text-mine-shaft-300 font-semibold"
                : ""
            }`}
            label="Personal Website"
            withAsterisk
            placeholder="Enter Url"
          />
        </div>
        <FileInput
          {...form.getInputProps("resume")}
          accept="application/pdf"
          variant={preview ? "unstyled" : "default"}
             readOnly={preview}
            className={` ${
              preview
                ? " text-mine-shaft-300 font-semibold"
                : ""
            }`}
          withAsterisk
          leftSection={
            <IconPaperclip stroke={1.5} className="text-mine-shaft-400" />
          }
          label="Resume/CV"
          placeholder="Attach Resume/CV"
          leftSectionPointerEvents="none"
        />
        <Textarea
          {...form.getInputProps("coverLetter")}
          variant={preview ? "unstyled" : "default"}
             readOnly={preview}
            className={` ${
              preview
                ? " text-mine-shaft-300 font-semibold"
                : ""
            }`}
          withAsterisk
          placeholder="Type something about yourself..."
          label="Cover Letter"
          autosize
          minRows={4}
        />
        {!preview && (
          <Button onClick={handlePreview} color="eucalyptus.4" variant="light">
            Preview
          </Button>
        )}
        {preview && (
          <div className="flex gap-10 [&>*]:w-1/2">
            <Button
              fullWidth
              onClick={handlePreview}
              color="eucalyptus.4"
              variant="outline"
            >
              Edit
            </Button>
            <Button
              fullWidth
              onClick={handleSubmit}
              color="eucalyptus.4"
              variant="light"
            >
              Submit
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationForm;
