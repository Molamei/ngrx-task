import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-login-ui',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-ui.component.html',
  styleUrls: ['./login-ui.component.scss'],
})
export class LoginUiComponent {
  @Input() form!: FormGroup;
  @Input() loading = false;
  @Input() error: string | null = null;

  @Output() submit = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (!this.form) {
      // fallback to prevent template crash
      this.form = this.fb.group({
        email: [''],
        password: [''],
      });
    }
  }
}
