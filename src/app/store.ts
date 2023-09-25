import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import activeTabReducer from './activeTabSlice';
import projectReducer from '../components/CreateProject/projectSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    activeTab: activeTabReducer,
    project: projectReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
