import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  selectChildBResource,
  selectChildBStatus,
  selectChildBMessages,
  selectChildBLoading,
} from '../../../../domain/src/lib/protocols/state/protocols.selectors';
import { ProtocolsState } from '../../../../domain/src/lib/protocols/state/protocols.reducer';
import * as ChildBActions from '../../../../domain/src/lib/protocols/state/protocols.actions';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'lib-protocols',
  imports: [CommonModule, FormsModule],
  templateUrl: './protocols.component.html',
  styleUrl: './protocols.component.scss',
})
export class ProtocolsComponent {
  vm$: Observable<{
    resource: any;
    status: number;
    messages: string[];
    loading: boolean;
  }>;

  searchTerm: string = '';
  expandedGroups: Set<string> = new Set();

  toggleGroup(groupId: string): void {
    if (this.expandedGroups.has(groupId)) {
      this.expandedGroups.delete(groupId);
    } else {
      this.expandedGroups.add(groupId);
    }
  }

  isExpanded(groupId: string): boolean {
    return this.expandedGroups.has(groupId);
  }

  constructor(private store: Store<ProtocolsState>) {
    this.vm$ = combineLatest({
      resource: this.store.select(selectChildBResource),
      status: this.store.select(selectChildBStatus),
      messages: this.store.select(selectChildBMessages),
      loading: this.store.select(selectChildBLoading),
    });
  }

  ngOnInit(): void {
    this.store.dispatch(ChildBActions.load());

    this.vm$.subscribe((data) => {
      console.log('Data:', data);
    });
  }
}
