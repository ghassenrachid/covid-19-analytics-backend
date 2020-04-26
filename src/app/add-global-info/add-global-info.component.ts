import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Dashboard } from '../models/dashboard.models';
import { DashboardService } from '../services/dashboard-service.service';

@Component({
  selector: 'add-global-info',
  templateUrl: './add-global-info.component.html',
  styleUrls: ['./add-global-info.component.css']
})
export class AddGlobalInfoComponent implements OnInit {

  public tmp_dashboard : Dashboard;

  constructor(
    private dashboardService : DashboardService,
    public dialogRef: MatDialogRef<AddGlobalInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Dashboard) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(){
    
    this.dialogRef.close();
    try {
      this.data.timestamp = null;
      this.addDashboard(this.data);
    }
    catch(err) {
      document.getElementById("demo").innerHTML = err.message;
    }
  }

  public addDashboard(dashboard : Dashboard){
    this.dashboardService.addDashboardService(dashboard)
      .subscribe(data => {
        this.tmp_dashboard = data[0];
      });
  }

  ngOnInit() {
  }
}