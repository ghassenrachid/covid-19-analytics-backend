
import { Injectable } from '@angular/core';
import { Dashboard } from '../models/dashboard.models';
import 'rxjs/add/operator/map';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
//import {catchError, map, tap} from 'rxjs/operator';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private wsUrl = 'https://covid-19-analytics-api.herokuapp.com'; //URL to web api
  constructor( private http: HttpClient ) {}

  /** GET heroes from the server */
  getDashboard(): Observable<Dashboard>{
    return this.http.get<Dashboard>(this.wsUrl+"/dashboard");
  }

  addDashboardService(d:Dashboard): Observable<Dashboard>{
    return this.http.post<Dashboard>(this.wsUrl+"/dashboard", d);
  }
}



