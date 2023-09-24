import { Component } from '@angular/core';
import { TaskFacade } from './../../state/task/task.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private taskFacade: TaskFacade) {}

  openCloseCreateTaskForm() {
    this.taskFacade.openCloseCreateTaskForm()
  }
}
