import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';

import * as actions from './task.actions';

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions) {}

//   createTask$ = createEffect(
//     () => this.actions$.pipe(
//         ofType(actions.createTask),
//         tap(({type, title, description}) => {

//         })
//     )
//   )
}
