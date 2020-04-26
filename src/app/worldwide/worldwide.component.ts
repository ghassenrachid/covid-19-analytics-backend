import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Worldwide } from '../models/worldwide.models';
import { WorldwideService } from '../services/worldwide-service.service';

@Component({
  selector: 'app-worldwide',
  templateUrl: './worldwide.component.html',
  styleUrls: ['./worldwide.component.css']
})

@Injectable()
export class WorldwideComponent implements OnInit {

  public tmp_worldwide : Worldwide;

  constructor(private worldwideService : WorldwideService) { }

  ngOnInit(): void {
    this.worldwideService.getWorldwide()
    .subscribe(data => {
      console.log(data);
      this.tmp_worldwide = data;
      console.log(data);
    });
  }

}
