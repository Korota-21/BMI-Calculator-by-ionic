import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title = 'BMI Calculator';
  calcUnits: 'm/kg' | 'ft/lbs' = 'm/kg';
  gender: 'female' | 'male' = 'female';
  heightInput: number | undefined = undefined;
  weghitInput: number | undefined = undefined;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  BMInumber: number | undefined = undefined;
  constructor(private alertController: AlertController) { }

  selectCalcUnitHandler = (selectedValue: 'm/kg' | 'ft/lbs') => {
    this.calcUnits = selectedValue;
  };
  selectGenderHandler = (selectedGender: 'female' | 'male') => {
    this.gender = selectedGender;
  };

  calculate(): void {
    const weightConvrsionFactor = this.calcUnits === 'm/kg' ? 1 : 2.2;
    const heightConvrsionFactor = this.calcUnits === 'm/kg' ? 1 : 30.48;
    const weight = +this.weghitInput / weightConvrsionFactor;
    const height = +this.heightInput * heightConvrsionFactor;

    const BMI = weight / (height * height);

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.weghitInput > 0 && this.heightInput > 0
      ? this.BMInumber = +BMI * 10000
      : this.errorAlert('رجائا استخدم ارقام موجبة فقط');
  }

  reset(): void {
    this.heightInput = undefined;
    this.weghitInput = undefined;
    this.BMInumber = undefined;
  }

  async errorAlert(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'ion-text-center',
      message,
      buttons: ['حسنا'],
    });

    await alert.present();
  }
}
