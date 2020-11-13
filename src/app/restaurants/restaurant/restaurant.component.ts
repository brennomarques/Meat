import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs/observable/from';

import { Restaurant } from './restaurant.model'

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
})
export class RestaurantComponent implements OnInit {

@Input() restaurant: Restaurant

  constructor() { }

  ngOnInit() {
  }

}
