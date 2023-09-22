import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './CreateProject.css';

const CreateProject: React.FC = () => {
  const initialValues = {
    projectName: '',
    owner: '',
    projectStartDate: '',
    projectEndDate: '',
  };

  const validationSchema = Yup.object({
    projectName: Yup.string().required('Project Name is required'),
    owner: Yup.string().required('Owner is required'),
    projectStartDate: Yup.date().required('Start Date is required'),
    projectEndDate: Yup.date().required('End Date is required'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted with values:', values);
    },
  });

  return (
    <div className="create-project-container">
      <h2 className="create-project-title">Create Project</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="projectName">Project Name:</label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              placeholder="Enter project name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.projectName}
            />
            {formik.touched.projectName && formik.errors.projectName ? (
              <div className="error">{formik.errors.projectName}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="owner">Owner:</label>
            <input
              type="text"
              id="owner"
              name="owner"
              placeholder="Enter owner name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.owner}
            />
            {formik.touched.owner && formik.errors.owner ? (
              <div className="error">{formik.errors.owner}</div>
            ) : null}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="projectStartDate">Project Start Date:</label>
            <input
              type="date"
              id="projectStartDate"
              name="projectStartDate"
              placeholder="Select start date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.projectStartDate}
            />
            {formik.touched.projectStartDate && formik.errors.projectStartDate ? (
              <div className="error">{formik.errors.projectStartDate}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="projectEndDate">Project End Date:</label>
            <input
              type="date"
              id="projectEndDate"
              name="projectEndDate"
              placeholder="Select end date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.projectEndDate}
            />
            {formik.touched.projectEndDate && formik.errors.projectEndDate ? (
              <div className="error">{formik.errors.projectEndDate}</div>
            ) : null}
          </div>
        </div>
        <div className="form-row">
          <button type="reset" className="reset-button">
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

export default CreateProject;
