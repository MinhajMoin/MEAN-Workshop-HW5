import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UsersComponent } from './users/users.component';
import { WeatherAppComponent } from './components/weather-app/weather-app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [ {
  path: '',
  canActivate: [AuthGuard],
  component: HomeComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'todo',
  canActivate: [AuthGuard],
  component: TodoAppComponent
}, {
  path: 'users',
  canActivate: [AuthGuard],
  component: UsersComponent
}, {
  path: 'welcome/:message',
  canActivate: [AuthGuard],
  component: WelcomeComponent
},
{
  path: 'weather',
  canActivate: [AuthGuard],
  component: WeatherAppComponent
},
{
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
