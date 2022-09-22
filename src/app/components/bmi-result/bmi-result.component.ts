import { Component, Input, OnInit } from '@angular/core';
import { ResultText } from './ResultStrings';
@Component({
  selector: 'app-bmi-result',
  templateUrl: './bmi-result.component.html',
  styleUrls: ['./bmi-result.component.scss'],
})
export class BMIResultComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  @Input() BMInumber: number | undefined;

  result = ResultText;
  constructor() {

  }
  ngOnInit() {
  }

}
