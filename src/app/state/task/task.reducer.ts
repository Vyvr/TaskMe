import { createReducer, on } from '@ngrx/store';
import { initialState } from './task.model';

import * as actions from './task.actions';
import { generateUUIDv4 } from 'src/app/scripts/id-generator';

export const taskReducer = createReducer(
  initialState,
  on(actions.createTask, (state, { title, description }) => ({
    ...state,
    tasks: [...state.tasks, {id: generateUUIDv4(), title, description, finished: false, createdAt: new Date()}],
  })),
  on(actions.editTask, (state, { title, description }) => ({
    ...state,
    title,
    description,
  })),
  on(actions.markTaskAsFinished, (state) => ({
    ...state,
    finished: true,
  })),
  on(actions.deleteTask, (state) => ({
    ...state,
  })),
  on(actions.openCloseCreateTaskForm, (state) => ({
    ...state,
    createTaskFormActive: !state.createTaskFormActive,
  }))
);
