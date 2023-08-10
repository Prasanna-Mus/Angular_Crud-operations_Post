import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LogInPageComponent } from './components/log-in-page/log-in-page.component';

const routes: Routes = [
  { path: "",redirectTo: '/PageLogIn', pathMatch: 'full'},
  {path:'PageLogIn',component:LogInPageComponent},
  {path: 'PostData', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
