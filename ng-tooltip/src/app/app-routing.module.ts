import { Routes } from "@angular/router"
import {HomeComponent} from "../app/home/home.component"

export const appRoutes:Routes = [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/home', pathMatch: 'full' },
    ];    

