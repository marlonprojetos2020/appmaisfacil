import { Component, OnInit } from '@angular/core';
import { DashboardStoreService } from './dashboard-page-store.service';

@Component({
  selector: 'app-dashboard-page-store',
  templateUrl: './dashboard-page-store.component.html',
  styleUrls: ['./dashboard-page-store.component.scss']
})
export class DashboardPageStoreComponent implements OnInit {

  dashboard = {};

  constructor( private dashboardStoreService: DashboardStoreService ) { }

  ngOnInit(): void {
    this.dashboardStoreService.getDashboard().subscribe(
      data => {
        this.dashboard = data;
      }
    );
  }
}
