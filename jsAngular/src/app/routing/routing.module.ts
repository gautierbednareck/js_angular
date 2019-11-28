import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameComponent } from '../name/name.component';
import { RouterModule,Route } from '@angular/router';
//commande ng g module namecomposant
const appRoutes: Route[]=[
{
  component: NameComponent,
  // chemin
  path: 'Lop'
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
