import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  @Input() test:string
  //comunique avec les parent par l'input
  constructor() { }

  ngOnInit() {
  }

}
