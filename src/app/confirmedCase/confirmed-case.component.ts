import { Injectable } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../models/user.models';
import { UserService } from '../services/user-service.service';


@Component({
  selector: 'app-confirmed-case',
  templateUrl: './confirmed-case.component.html',
  styleUrls: ['./confirmed-case.component.css']
})

@Injectable()
export class ConfirmedCaseComponent implements OnInit {

  public tmp_user : User;
  public phoneNumber : string;
  constructor(private userService : UserService) { }

  ngOnInit(){ 
  }

  getUserByPhoneNumber(){
    this.userService.getUserByPhoneNumber(this.phoneNumber)
    .subscribe(data => {
      this.tmp_user = data;
    });
  }
  
  addConfirmedUser(){
    this.userService.addConfirmedUser(this.tmp_user.id)
    .subscribe(data => {
      console.log(data);
      this.tmp_user = data;
    }
    );
  }
}

