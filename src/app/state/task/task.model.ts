export interface TaskData {
  id: string;
  title: string;
  description: string;
  finished: boolean;
  createdAt: Date;
}

export interface editTaskPayload {
  id: string;
  title: string;
  description: string;
}

export interface createTaskPayload {
  title: string;
  description: string;
}

export interface deleteTaskPayload {
  id: string;
}

export interface TasksState {
  tasks: TaskData[];
  createTaskFormActive: boolean;
}

export const initialState: TasksState = {
  tasks: [],
  createTaskFormActive: false,
};
