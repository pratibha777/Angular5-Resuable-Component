import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appRoutes } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TooltipComponent } from './shared/tooltip/tooltip.component';
import { FocusMeDirective } from './shared/focus-me.directive';

import { WINDOW_PROVIDERS, WINDOW } from "./shared/window.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TooltipComponent,
    FocusMeDirective
  ],
  imports: [
    BrowserModule,    
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
