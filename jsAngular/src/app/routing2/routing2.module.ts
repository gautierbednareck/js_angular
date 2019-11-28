import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameComponent } from '../name/name.component';
import { RouterModule,Route } from '@angular/router';



const appRoutes: Route[]=[
  {
    component: NameComponent,
    path: 'test'
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


export class Routing2Module { }
