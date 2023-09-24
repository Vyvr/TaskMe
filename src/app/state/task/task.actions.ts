import { createAction, props } from '@ngrx/store';
import { deleteTaskPayload, createTaskPayload, editTaskPayload } from './task.model';

export const createTask = createAction(
  '[Task Page] Create Task',
  props<createTaskPayload>()
);

export const editTask = createAction(
  '[Task Page] Edit Task',
  props<editTaskPayload>()
);

export const markTaskAsFinished = createAction(
  '[Task Page] Mark Task As Finished'
);

export const deleteTask = createAction(
  '[Task Page] Delete Task',
  props<deleteTaskPayload>()
);

export const openCloseCreateTaskForm = createAction(
  '[Task Page] Open Create Task Form'
);
