import { Injectable } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { Dashboard } from '../models/dashboard.models';
import { DashboardService } from '../services/dashboard-service.service';

import { AddGlobalInfoComponent } from '../add-global-info/add-global-info.component';

import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-global-info',
  templateUrl: './global-info.component.html',
  styleUrls: ['./global-info.component.css']
})

@Injectable()
export class GlobalInfoComponent implements OnInit {

  public tmp_dashboard : Dashboard;
  public lastUpdate: string;
  constructor(private dashboardService : DashboardService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dashboardService.getDashboard()
    .subscribe(data => {
      this.tmp_dashboard = data[0];
      this.lastUpdate = new Date(Date.parse((this.tmp_dashboard.timestamp).toString())).toUTCString();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddGlobalInfoComponent, {
      width: '300px',
      data: this.tmp_dashboard
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}

