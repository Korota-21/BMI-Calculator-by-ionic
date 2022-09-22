import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gender-controller',
  templateUrl: './gender-controller.component.html',
  styleUrls: ['./gender-controller.component.scss'],
})
export class GenderControllerComponent implements OnInit {
  @Input() selectedGender: 'female' | 'male';
  @Output() genderChangeHandler = new EventEmitter<'female' | 'male'>();
  constructor() { }

  ngOnInit() { }

}
