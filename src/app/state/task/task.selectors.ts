import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { TasksState } from './task.model';

const selectTaskState = (state: AppState): TasksState => state.task;

export const selectIsCreateTaskOpen = createSelector(
  selectTaskState,
  (state) => state.createTaskFormActive
);
