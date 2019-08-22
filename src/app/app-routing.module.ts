import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {WelcomPageComponent} from './WelcomPage/welcom.component';
import {ServiceComponent} from './service/service.component';
import {AddTaskComponent} from './AddTask/add-task/add-task.component';
import { AuthGuard } from './Auth/auth.guard';

const routes: Routes = [
  // case sensitive
  { path: 'login', pathMatch: 'full', component: LoginComponent},
  { path: 'signup', pathMatch: 'full', component: SignupComponent},
  { path: 'service', pathMatch: 'full', component: ServiceComponent, canActivate: [AuthGuard]},
  { path: 'service/addTask', pathMatch: 'full', component: AddTaskComponent, canActivate: [AuthGuard]},
  // default page
  { path: '', pathMatch: 'full', component: WelcomPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ enableTracing: true })
    
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
