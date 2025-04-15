import { OrderInfoService } from './../services/order-info.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as orderActions from './order-info.actions';


@Injectable()
export class ChildAEffects {
  load$: any;
  constructor(private actions$: Actions, private service: OrderInfoService) {
    this.load$ = createEffect(() =>
      this.actions$.pipe(
        ofType(orderActions.load),
        switchMap(() =>
          this.service.getData().pipe(
            map((data) => orderActions.loadSuccess({ data })),
            catchError((error) => of(orderActions.loadFailure({ error })))
          )
        )
      )
    );
  }

  
}
