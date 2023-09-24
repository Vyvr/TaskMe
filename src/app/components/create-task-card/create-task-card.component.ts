import { Component } from '@angular/core';
import { TaskFacade } from 'src/app/state/task/task.facade';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'create-task-card',
  templateUrl: './create-task-card.component.html',
  styleUrls: ['./create-task-card.component.scss'],
})
export class CreateTaskCardComponent {
  title: string = '';
  description: string = '';

  createTaskFormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private taskFacade: TaskFacade) {}

  createTask(): void {
    const title = this.createTaskFormGroup.value.title;
    const description = this.createTaskFormGroup.value.description;

    if (title && description && title.length > 0 && description.length > 0) {
      this.taskFacade.createTask({ title, description });
    }
  }
}
