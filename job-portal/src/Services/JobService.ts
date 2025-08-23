
import axiosInstance from "../Interceptor/AxiosInterceptor";


export const debugCheck = "REAL FILE LOADED";

const postJob = async (job: any) => {
  return axiosInstance
    .post(`/jobs/post`, job)
    .then((result) => result.data)
    .catch((error) => {
      throw error;
    });
};

const getAlljobs = async () => {
  return axiosInstance
    .get(`/jobs/getAll`)
    .then((result) => result.data)
    .catch((error) => {
      throw error;
    });
};

const getJob = async (id: any) => {
  return axiosInstance
    .get(`/jobs/get/${id}`)
    .then((result) => result.data)
    .catch((error) => {
      throw error;
    });
};

const applyJob = async (id: any, applicant: any) => {
  return axiosInstance
    .post(`/jobs/apply/${id}`, applicant)
    .then((result) => result.data)
    .catch((error) => {
      throw error;
    });
};

export const getJobsPostedBy = async (id: number | string) => {
  try {
    const result = await axiosInstance.get(`/jobs/postedBy/${id}`);
    return result.data;
  } catch (error) {
    throw error;
  }
};

const changeAppStatus = async (application: any) => {
  return axiosInstance
    .post(`/jobs/changeAppStatus`, application)
    .then((result) => result.data)
    .catch((error) => {
      throw error;
    });
};




export { postJob, getAlljobs, getJob, applyJob, changeAppStatus };
