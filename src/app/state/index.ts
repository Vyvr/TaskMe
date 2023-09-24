import { TaskEffects } from "./task/task.effects";
import { TaskFacade } from "./task/task.facade";
import { TasksState } from "./task/task.model";
import { taskReducer } from "./task/task.reducer";

export const reducers = {
  task: taskReducer
  };
  
  export const effects = [TaskEffects];
  
  export const facades = [TaskFacade];
  
  export interface AppState {
    task: TasksState
  }