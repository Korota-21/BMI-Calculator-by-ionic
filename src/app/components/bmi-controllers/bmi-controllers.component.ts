import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bmi-controllers',
  templateUrl: './bmi-controllers.component.html',
  styleUrls: ['./bmi-controllers.component.scss'],
})
export class BMIControllersComponent implements OnInit {
  @Output() calculate = new EventEmitter();
  @Output() resetInputs= new EventEmitter();
  constructor() { }

  ngOnInit() { }

}
