
import React from "react";
import SideNav from "./SideNav/SideNav";
import WelcomePage from "./WelcomePage/WelcomePage"; 

import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, Route, Routes } from "react-router-dom"; 

import "./ProjectPage.css";
import CreateIssue from "../CreateIssue/CreateIssue";
import CreateProject from "../CreateProject/CreateProject";

const ProjectPage: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  return (
    <div className="project-page">
      <div className="project-sidenav">
        <SideNav />
      </div>
      <div className="project-welcome">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/create-issue" element={<CreateIssue />} />
          <Route path="/create-project" element={<CreateProject />} />
        </Routes>
      </div>
    </div>
  );
};

export default ProjectPage;
