import {  Route, Routes, useLocation } from "react-router-dom";
import Header from "../Component/Header/Header";
import { Divider } from "@mantine/core";
import FindJobs from "./FindJobsPage";
import FindTalentPage from "./FindTalentPage";
import CompanyPage from "./CompanyPage";
import JobDescPage from "./JobDescPage";
import PostedJobPage from "./PostedJobPage";
import JobHistoryPage from "./JobHistoryPage";
import ApplyJobPage from "./ApplyJobPage";
import PostJobPage from "./PostJobPage";
import TalentProfilePage from "./TalentProfilePage";
import SignUpPage from "./SignUpPage";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";
import Footer from "../Component/Footer/Footer";
import { useSelector } from "react-redux";
import PublicRoute from "../Services/PublicRoute";
import ProtectedRoute from "../Services/ProtectedRoute";

const AppRoute = () => {
  const user = useSelector((state: any) => state.user);
  const location = useLocation();

  return (
    <div className="relative">
      <Header />
      {location.pathname != "/sign-up" ? (
        <Divider color="mine-shaft.8" size="xs" />
      ) : null}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-jobs" element={<FindJobs />} />
        <Route path="/find-talent" element={<FindTalentPage />} />
        <Route path="/company/:name" element={<CompanyPage />} />
        <Route path="/job/:id" element={<JobDescPage />} />
        <Route path="/posted-job/:id" element={<ProtectedRoute allowedRoles={['EMPLOYER']}><PostedJobPage /></ProtectedRoute>} />
        <Route path="/post-job/:id" element={<ProtectedRoute allowedRoles={['EMPLOYER']}><PostJobPage /></ProtectedRoute>} />
        <Route path="/job-history" element={<ProtectedRoute allowedRoles={['APPLICANT']}><JobHistoryPage /></ProtectedRoute>} />
        <Route path="/apply-job/:id" element={<ApplyJobPage />} />
        <Route path="/talent-profile/:id" element={<TalentProfilePage />} />
        <Route path="/sign-up" element={<PublicRoute><SignUpPage /></PublicRoute>} />
        <Route path="/login" element={<SignUpPage  />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRoute;
