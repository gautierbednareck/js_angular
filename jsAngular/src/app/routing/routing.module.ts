import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameComponent } from '../name/name.component';
import { RouterModule,Route } from '@angular/router';
import { LopComponent } from '../lop/lop.component';
//commande ng g module namecomposant
//contient tout les redirection C4EST PUTAIN DE ROUTEUR QUOI!
const appRoutes: Route[]=[
{
  component: NameComponent,
  // chemin
  path: 'test'
},
{
  component: LopComponent,
  // chemin
  path: 'lop'
}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule { }
