import { provideEffects } from '@ngrx/effects';

import { loginReducer } from '../../../../libs/login/domain/src/lib/state/login.reducer';
import { LoginEffects } from '../../../../libs/login/domain/src/lib/state/login.effects';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore, provideState } from '@ngrx/store';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideEffects(),                
    provideHttpClient(),
    provideRouter(appRoutes),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
};
