import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../city/city';
import { CityService } from '../city/city.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /* 追加 */
  cities: City[];

  constructor(
    /* 追加 */
    private router: Router,
    private service: CityService
  ){ } 

  /* 追加 */
  ngOnInit() {
    this.cities = this.service.getCities();
  }

}