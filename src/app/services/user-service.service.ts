import { Injectable } from '@angular/core';
import { User } from '../models/user.models';
import 'rxjs/add/operator/map';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  private wsUrl = 'https://covid-19-analytics-api.herokuapp.com'; //URL to web api
  constructor( private http: HttpClient ) {}

  /** GET heroes from the server */
  getUserByPhoneNumber(phoneNumber:String): Observable<User>{
    return this.http
    .get<User>(this.wsUrl+"/users/phoneNumber/"+phoneNumber)
  }

  addConfirmedUser(userId:number): Observable<User>{
    return this.http.post<User>(this.wsUrl+"/addConfirmedCase", userId);
  }

}