import { Injectable } from '@angular/core';
import { Component , OnInit } from '@angular/core';
import { Dashboard } from '../models/dashboard.models';
import { DashboardService } from '../services/dashboard-service.service';

@Component({
  selector: 'app-global-info',
  templateUrl: './global-info.component.html',
  styleUrls: ['./global-info.component.css']
})

@Injectable()
export class GlobalInfoComponent implements OnInit {

  public tmp_dashboard : Dashboard;

  constructor(private dashboardService : DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getDashboard()
    .subscribe(data => {
      this.tmp_dashboard = data;
      console.log('data',data);
    });
  }

  public addDashboard(dashboard : Dashboard){
    this.dashboardService.addDashboardService(dashboard)
      .subscribe(data => {
        this.tmp_dashboard = data;
        console.log('data',data);
      });
  }

}

