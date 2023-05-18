import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { DatiComponent } from './dati/dati.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "info", component: InfoComponent},
  {path: "ricerca", redirectTo: "/"},
  {path: "login", component: LoginComponent},
  {path: "**", redirectTo: "/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
