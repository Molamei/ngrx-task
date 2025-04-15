import { DashboardFeatureComponent } from './../../../../libs/dashboard/feature/src/lib/dashboard-feature/dashboard-feature.component';
import { ProtocolsComponent } from './../../../../libs/dashboard/feature/src/lib/protocols/protocols.component';
import { OrderInfoComponent } from './../../../../libs/dashboard/feature/src/lib/order-info/order-info.component';
import { LoginFeatureComponent } from './../../../../libs/login/feature/src/lib/login-feature/login-feature.component';
import { PostsFeatureComponent } from '../../../../libs/posts/feature/src/lib/posts-feature/posts-feature.component';
import { Route } from '@angular/router';
import { LoginUiComponent } from '../../../../libs/login/ui/src/lib/login-ui/login-ui.component';
import { provideState } from '@ngrx/store';
import { loginFeatureName, loginReducer } from 'libs/login/domain/src/lib/state/login.reducer';
import { provideEffects } from '@ngrx/effects';
import { LoginEffects } from 'libs/login/domain/src/lib/state/login.effects';
import { childAReducer } from 'libs/dashboard/domain/src/lib/order-info/state/order-info.reducer';
import { ChildAEffects } from 'libs/dashboard/domain/src/lib/order-info/state/order-info.effects';
import { childBReducer } from 'libs/dashboard/domain/src/lib/protocols/state/protocols.reducer';
import { ChildBEffects } from 'libs/dashboard/domain/src/lib/protocols/state/protocols.effects';

export const appRoutes: Route[] = [
    // {path: '', component: LoginFeatureComponent,    providers: [
    //     provideState(loginFeatureName, loginReducer),
    //     provideEffects(
    //       LoginEffects 
    //     ),
    //   ],},
    // {path: 'posts', component: PostsFeatureComponent},
    // {path: '', component: OrderInfoComponent,    providers: [
    //   provideState('order-info', childAReducer),
    //   provideEffects(
    //     ChildAEffects 
    //   ),
    // ],},
    // {path: '', component: ProtocolsComponent,    providers: [
    //   provideState('protocols', childBReducer),
    //   provideEffects(
    //     ChildBEffects 
    //   ),
    // ],},
    {path: '', component: DashboardFeatureComponent,    providers: [
      provideState('protocols', childBReducer),
      provideEffects(
        ChildBEffects 
      ),
      provideState('order-info', childAReducer),
      provideEffects(
        ChildAEffects 
      ),
    ],
    
  },
];
