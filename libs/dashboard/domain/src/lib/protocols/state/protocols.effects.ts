import { protocolsService } from './../services/protocols.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ProtocolsActions from './protocols.actions';


@Injectable()
export class ChildBEffects {
  load$: any;
  constructor(private actions$: Actions, private service: protocolsService) {
    this.load$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ProtocolsActions.load),
        switchMap(() =>
          this.service.getData().pipe(
            map((data) => ProtocolsActions.loadSuccess({ data })),
            catchError((error) => of(ProtocolsActions.loadFailure({ error })))
          )
        )
      )
    );
  }

  
}
