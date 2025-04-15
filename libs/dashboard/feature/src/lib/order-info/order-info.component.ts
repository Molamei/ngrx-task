import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  selectChildAResource,
  selectChildAStatus,
  selectChildAMessages,
  selectChildALoading
} from '../../../../domain/src/lib/order-info/state/order-info.selectors';
import { orderState } from '../../../../domain/src/lib/order-info/state/order-info.reducer';
import * as ChildAActions from '../../../../domain/src/lib/order-info/state/order-info.actions';

@Component({
  selector: 'lib-order-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-info.component.html',
  styleUrl: './order-info.component.scss',
})
export class OrderInfoComponent {
  vm$: Observable<{
    resource: any;
    status: number;
    messages: string[];
    loading: boolean;
  }>;

  constructor(private store: Store<orderState>) {
    this.vm$ = combineLatest({
      resource: this.store.select(selectChildAResource),
      status: this.store.select(selectChildAStatus),
      messages: this.store.select(selectChildAMessages),
      loading: this.store.select(selectChildALoading),
    });
  }

  ngOnInit(): void {
    this.store.dispatch(ChildAActions.load());
  }
}
