import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-card-component',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent implements OnInit {
  id: number | null = null;
  title: string = 'Wynieść śmieci';
  description: string = 'no wyjeb te śmieci śmieciu';
  finished: boolean = false;
  createdAt: Date = new Date();
  dateString: string = '';

  constructor() {
    
  }

  ngOnInit() {
    this.dateString = this.createdAt.toLocaleDateString();
  }
}
