
import { Injectable } from '@angular/core';
import { Worldwide } from '../models/worldwide.models';
import 'rxjs/add/operator/map';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
//import {catchError, map, tap} from 'rxjs/operator';

@Injectable({
  providedIn: 'root'
})
export class WorldwideService {
  
  private wsUrl = 'https://api.covid19api.com/summary'; //URL to web api
  constructor( private http: HttpClient ) {}

  /** GET heroes from the server */
  getWorldwide(): Observable<Worldwide>{
    return this.http.get<Worldwide>(this.wsUrl);
  }
}



