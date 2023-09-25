import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addProject } from './projectSlice';

import './CreateProject.css';
import axios from 'axios';
import { selectProjects } from './projectSlice';
import { useAppSelector } from '../../app/hooks';

const CreateProject = () => {
  const dispatch = useDispatch();
  const projectsList = useAppSelector(selectProjects);

  console.log(projectsList);

  const initialValues = {
    projectName: '',
    projectOwner: 1,
    projectStartDate: '',
    projectEndDate: '',
  };

  const validationSchema = Yup.object({
    projectName: Yup.string().required('Project Name is required'),
    projectOwner: Yup.string().required('Owner is required'),
    projectStartDate: Yup.date().required('Start Date is required'),
    projectEndDate: Yup.date()
      .required('End Date is required')
      .min(Yup.ref('projectStartDate'), 'End Date must be after Start Date'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const headers = {
          'Content-Type': 'application/json',
          'userid': '1',
        };

        const data = {
          projectName: values.projectName,
          projectOwner: values.projectOwner,
          projectStartDate: values.projectStartDate,
          projectEndDate: values.projectEndDate,
        };
        const response = await axios.post(
          'https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/project',
          data, { headers }
        );

        if (response.status === 200 || response.status === 201) {
          dispatch(addProject(response.data));
          console.log('Form submitted with values:', values);
        } else {
          console.error('API Error:', response);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });

  const handleReset = () => {
    formik.resetForm();
  };

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
            <label htmlFor="projectOwner">Owner:</label>
            <input
              type="text"
              id="projectOwner"
              name="projectOwner"
              placeholder="Enter owner name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.projectOwner}
            />
            {formik.touched.projectOwner && formik.errors.projectOwner ? (
              <div className="error">{formik.errors.projectOwner}</div>
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
          <button type="reset" className="reset-button" onClick={handleReset}>
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
