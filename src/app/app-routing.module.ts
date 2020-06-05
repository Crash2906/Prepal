import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PackCreComponent } from './Packs/pack-cre/pack-cre.component';
import { PackVerComponent } from './Packs/pack-ver/pack-ver.component';


const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'Packs', component: LoginComponent },
  { path: 'PacksCr', component: PackCreComponent },
  { path: 'PacksVe', component: PackVerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
