import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { selectProjects } from "../../CreateProject/projectSlice";
import { useAppSelector } from "../../../app/hooks";
import IssueBoard from "../IssueBoard/IssueBoard";

interface FormValues {
  projectName: string;
  projectOwner: string;
  projectStartDate: string;
  projectEndDate: string;
}

const ProjectBoard: React.FC = () => {
  const projectsList = useAppSelector(selectProjects);
  const [selectedProject, setSelectedProject] = useState<string>("");

  const validationSchema = Yup.object({
    projectName: Yup.string().required("Project Name is required"),
    projectOwner: Yup.string().required("Owner is required"),
    projectStartDate: Yup.string().required("Start Date is required"),
    projectEndDate: Yup.string().required("End Date is required"),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      projectName: "",
      projectOwner: "",
      projectStartDate: "",
      projectEndDate: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  const handleProjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProjectName = event.target.value;
    setSelectedProject(selectedProjectName);

    const selectedProject = projectsList.find(
      (project) => project.projectName === selectedProjectName
    );

    if (selectedProject) {
      formik.setFieldValue("projectStartDate", selectedProject.projectStartDate);
      formik.setFieldValue("projectEndDate", selectedProject.projectEndDate);
    }

    formik.setFieldValue("projectName", selectedProjectName);
  };

  return (
    <div className="create-project-container">
      <h2 className="create-project-title">Project Details</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="projectName">Project Name:</label>
            <select
              id="projectName"
              name="projectName"
              onChange={handleProjectChange}
              onBlur={formik.handleBlur}
              value={formik.values.projectName}
            >
              <option value="" disabled>
                Select project name
              </option>
              {projectsList.map((project) => (
                <option
                  key={project.projectName}
                  value={project.projectName}
                >
                  {project.projectName}
                </option>
              ))}
            </select>
            {formik.touched.projectName && formik.errors.projectName ? (
              <div className="error">{formik.errors.projectName}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="projectOwner">Owner:</label>
            <select
              id="projectOwner"
              name="projectOwner"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.projectOwner}
            >
              <option value="" disabled>
                Select owner name
              </option>
              {projectsList.map((project) => (
                <option
                  key={project.projectOwner}
                  value={project.projectOwner}
                >
                  {project.projectOwner}
                </option>
              ))}
            </select>
            {formik.touched.projectOwner && formik.errors.projectOwner ? (
              <div className="error">{formik.errors.projectOwner}</div>
            ) : null}
          </div>
        </div>
        {selectedProject && (
          <>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="projectStartDate">Start Date:</label>
                <input
                  type="text"
                  id="projectStartDate"
                  name="projectStartDate"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.projectStartDate}
                />
                {formik.touched.projectStartDate && formik.errors.projectStartDate ? (
                  <div className="error">{formik.errors.projectStartDate}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="projectEndDate">End Date:</label>
                <input
                  type="text"
                  id="projectEndDate"
                  name="projectEndDate"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.projectEndDate}
                />
                {formik.touched.projectEndDate && formik.errors.projectEndDate ? (
                  <div className="error">{formik.errors.projectEndDate}</div>
                ) : null}
              </div>
            </div>
          </>
        )}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="assignee">Filter assignee:</label>
            <select
              id="assignee"
              name="assignee"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // value={formik.values.assignee}
            >
              <option value="" disabled>
                Select assignee
              </option>
              <option value="assignee1">Assignee 1</option>
              <option value="assignee2">Assignee 2</option>
              {/* Add more options as needed */}
            </select>
            {/* {formik.touched.assignee && formik.errors.assignee ? (
              <div className="error">{formik.errors.assignee}</div>
            ) : null} */}
          </div>
        </div>
        <div><IssueBoard /></div>
      </form>
    </div>
  );
};

export default ProjectBoard;
