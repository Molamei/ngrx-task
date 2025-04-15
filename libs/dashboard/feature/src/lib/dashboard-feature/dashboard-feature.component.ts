import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderInfoComponent } from '../order-info/order-info.component';
import { ProtocolsComponent } from '../protocols/protocols.component';

@Component({
  selector: 'lib-dashboard-feature',
  imports: [CommonModule, OrderInfoComponent, ProtocolsComponent],
  templateUrl: './dashboard-feature.component.html',
  styleUrl: './dashboard-feature.component.scss',
})
export class DashboardFeatureComponent {}
