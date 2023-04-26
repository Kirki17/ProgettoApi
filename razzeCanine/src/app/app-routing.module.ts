import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { DatiComponent } from './dati/dati.component';

const routes: Routes = [
  {path: "info", component: InfoComponent},
  {path: "dati", component: DatiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
