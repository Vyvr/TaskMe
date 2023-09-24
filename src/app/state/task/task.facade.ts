import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '..';
import { deleteTaskPayload, createTaskPayload, editTaskPayload } from './task.model';

import * as actions from './task.actions';
import * as selectors from './task.selectors';

@Injectable()
export class TaskFacade {
  isCreateTaskFormActive$ = this.store.select(selectors.selectIsCreateTaskOpen);

  constructor(private store: Store<AppState>) {}

  createTask(payload: createTaskPayload): void {
    this.store.dispatch(actions.createTask(payload));
  }
  editTask(payload: editTaskPayload): void {
    this.store.dispatch(actions.editTask(payload));
  }
  markTaskAsFinished(): void {
    this.store.dispatch(actions.markTaskAsFinished());
  }
  deleteTask(payload: deleteTaskPayload): void {
    this.store.dispatch(actions.deleteTask(payload));
  }

  openCloseCreateTaskForm(): void {
    this.store.dispatch(actions.openCloseCreateTaskForm());
  }
}
