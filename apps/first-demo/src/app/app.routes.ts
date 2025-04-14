import { LoginFeatureComponent } from './../../../../libs/login/feature/src/lib/login-feature/login-feature.component';
import { PostsFeatureComponent } from '../../../../libs/posts/feature/src/lib/posts-feature/posts-feature.component';
import { Route } from '@angular/router';
import { LoginUiComponent } from '../../../../libs/login/ui/src/lib/login-ui/login-ui.component';
import { provideState } from '@ngrx/store';
import { loginFeatureName, loginReducer } from 'libs/login/domain/src/lib/state/login.reducer';
import { provideEffects } from '@ngrx/effects';
import { LoginEffects } from 'libs/login/domain/src/lib/state/login.effects';


export const appRoutes: Route[] = [
    {path: '', component: LoginFeatureComponent,    providers: [
        provideState(loginFeatureName, loginReducer),
        provideEffects(
          LoginEffects 
        ),
      ],},
    {path: 'posts', component: PostsFeatureComponent},
];
