import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state';
import { TaskFacade } from 'src/app/state/task/task.facade';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  isCreateTaskFormActive$ = this.taskFacade.isCreateTaskFormActive$;
  
  constructor(private store: Store<AppState>, private taskFacade: TaskFacade) {}

}
