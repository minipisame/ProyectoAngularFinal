import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { DetailsComponent } from './details/details.component';
const routes: Routes = [
  {
    path:'games', component:  CuerpoComponent},
    {path:'characters', component: CuerpoComponent},
    {path:'accessories',component:CuerpoComponent},
    {path:':type/:guid',component:DetailsComponent},
    {path:':type/:guid',component:DetailsComponent},
    {path:':type/:guid',component:DetailsComponent},
    {
      path: '',
      redirectTo: '/games',
      pathMatch: 'full'
    },
      {
      path: '**',component:CabeceraComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
