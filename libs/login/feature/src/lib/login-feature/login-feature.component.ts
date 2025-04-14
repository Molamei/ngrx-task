import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../../../../domain/src/lib/state/login.actions';
import { LoginUiComponent } from '../../../../ui/src/lib/login-ui/login-ui.component';

@Component({
  selector: 'lib-login-feature',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LoginUiComponent],
  templateUrl: './login-feature.component.html',
  styleUrls: ['./login-feature.component.scss'],
})
export class LoginFeatureComponent {
  form: FormGroup;
  loading$: any;
  error$: any;

  constructor(private fb: FormBuilder, private store: Store) {
    
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.loading$ = this.store.select((state: any) => state.login.loading);
    this.error$ = this.store.select((state: any) => state.login.error);
  }
 
  onSubmit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.store.dispatch(login({ email, password }));
    }
  }
}
