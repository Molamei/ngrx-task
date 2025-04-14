import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as LoginActions from './login.actions';
import { of } from 'rxjs';
import { map, switchMap, delay, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffects {
  login$: any;
  loginSuccess$: any;

  constructor(private actions$: Actions, private router: Router) {
    console.log('LoginEffects constructor');
      this.login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.login),
      switchMap(({ email, password }) => {
        console.log('Login received:', email);
        return of({ id: 1, name: 'Mock User', email }).pipe(
          delay(1000),
          map((user) => LoginActions.loginSuccess({ user })),
          catchError(() =>
            of(LoginActions.loginFailure({ error: 'Invalid credentials' }))
          )
        );
      })
    )
  );

  this.loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.loginSuccess),
        tap(() => {
          console.log('Navigating to /posts');
          this.router.navigate(['/posts']);
        })
      ),
    { dispatch: false }
  );
  }


}
