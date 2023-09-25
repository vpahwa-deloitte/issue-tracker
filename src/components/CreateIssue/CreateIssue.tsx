import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CreateIssue.css";

const CreateIssue = () => {
  const initialValues = {
    summary: "",
    type: "",
    project: "",
    description: "",
    priority: "",
    assignee: "",
    tags: "",
    sprint: "",
    storyPoints: "",
  };

  const validationSchema = Yup.object({
    summary: Yup.string().required("Summary is required"),
    type: Yup.string().required("Type is required"),
    project: Yup.string().required("Project is required"),
    description: Yup.string().required("Description is required"),
    priority: Yup.string().required("Priority is required"),
    assignee: Yup.string().required("Assignee is required"),
    tags: Yup.string(),
    sprint: Yup.string(),
    storyPoints: Yup.number().min(
      0,
      "Story Points should be a positive number"
    ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <div className="create-issue-container">
      <h2 className="create-issue-title">Create User Stories/ Tasks/ Bugs</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-row">
          <label htmlFor="summary" className="label-summary">Summary:</label>
          <input
            type="text"
            id="summary"
            name="summary"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.summary}
          />
          {formik.touched.summary && formik.errors.summary && (
            <div className="error">{formik.errors.summary}</div>
          )}
        </div>
        <div className="form-row">
          <div className="half-width">
            <label htmlFor="type">Type:</label>
            <select
              id="type"
              name="type"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.type}
            >
              <option value="">Select Type</option>
              {/* Add options for types here */}
            </select>
            {formik.touched.type && formik.errors.type && (
              <div className="error">{formik.errors.type}</div>
            )}
          </div>
          <div className="half-width">
            <label htmlFor="project">Project:</label>
            <select
              id="project"
              name="project"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.project}
            >
              <option value="">Select Project</option>
              {/* Add options for projects here */}
            </select>
            {formik.touched.project && formik.errors.project && (
              <div className="error">{formik.errors.project}</div>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="half-width">
            <label htmlFor="priority">Priority:</label>
            <select
              id="priority"
              name="priority"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.priority}
            >
              <option value="">Select Priority</option>
              {/* Add options for priority here */}
            </select>
            {formik.touched.priority && formik.errors.priority && (
              <div className="error">{formik.errors.priority}</div>
            )}
          </div>
          <div className="half-width">
            <label htmlFor="assignee">Assignee:</label>
            <select
              id="assignee"
              name="assignee"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.assignee}
            >
              <option value="">Select Assignee</option>
              {/* Add options for assignees here */}
            </select>
            {formik.touched.assignee && formik.errors.assignee && (
              <div className="error">{formik.errors.assignee}</div>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="half-width">
            <label htmlFor="tags">Tags:</label>
            <select
              id="tags"
              name="tags"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.tags}
            >
              <option value="">Select Tags</option>
              {/* Add options for tags here */}
            </select>
            {formik.touched.tags && formik.errors.tags && (
              <div className="error">{formik.errors.tags}</div>
            )}
          </div>
          <div className="half-width">
            <label htmlFor="sprint">Sprint:</label>
            <select
              id="sprint"
              name="sprint"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.sprint}
            >
              <option value="">Select Sprint</option>
              {/* Add options for sprints here */}
            </select>
            {formik.touched.sprint && formik.errors.sprint && (
              <div className="error">{formik.errors.sprint}</div>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="half-width">
            <label htmlFor="storyPoints">Story Points:</label>
            <input
              type="number"
              id="storyPoints"
              name="storyPoints"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.storyPoints}
            />
            {formik.touched.storyPoints && formik.errors.storyPoints && (
              <div className="error">{formik.errors.storyPoints}</div>
            )}{" "}
          </div>
        </div>
        <div className="form-row">
          <button
            type="reset"
            className="reset-button"
            onClick={formik.handleReset}
          >
            RESET
          </button>
          <button type="submit" className="create-button">
            CREATE
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateIssue;
