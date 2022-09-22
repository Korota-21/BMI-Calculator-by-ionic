import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { BMIControllersComponent } from './components/bmi-controllers/bmi-controllers.component';
import { BMIResultComponent } from './components/bmi-result/bmi-result.component';
import { GenderControllerComponent } from './components/gender-controller/gender-controller.component';
import { InputControllerComponent } from './components/input-controller/input-controller.component';

@NgModule({
  declarations: [AppComponent,InputControllerComponent,BMIControllersComponent,BMIResultComponent,GenderControllerComponent],
  imports: [BrowserModule, IonicModule.forRoot() ,FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
