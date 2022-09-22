import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-controller',
  templateUrl: './input-controller.component.html',
  styleUrls: ['./input-controller.component.scss'],
})
export class InputControllerComponent implements OnInit {
  @Input() selectedValue: 'm/kg' | 'ft/lbs';
  @Output() inputChangeHandler = new EventEmitter<'m/kg' | 'ft/lbs'>();
  constructor() { }
  ngOnInit() { }
}
