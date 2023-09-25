import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface Project {
  projectName: string;
  owner: string;
  startDate: string; 
  endDate: string; 
}

interface ProjectState {
  projects: Project[];
}

const initialState: ProjectState = {
  projects: [],
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
  },
});

export const { addProject } = projectSlice.actions;
export default projectSlice.reducer;

export const selectProjects = (state: RootState) => state.project.projects;
