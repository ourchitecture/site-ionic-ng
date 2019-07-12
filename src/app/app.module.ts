import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { MatCommonModule } from '@angular/material';
import { CovalentCommonModule } from '@covalent/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
   declarations: [
      AppComponent,
   ],
   entryComponents: [],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      IonicModule.forRoot(),
      MatCommonModule,
      CovalentCommonModule,
      AppRoutingModule,
   ],
   providers: [
      StatusBar,
      SplashScreen
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
