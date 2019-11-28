import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  @Input() test: string
  //comunique avec les parent par l'input
  @Output() messageEvent=new EventEmitter <string>();
  constructor() { }
  sendMessage(){
    console.log('sendMessage()')
    this.messageEvent.emit("this.message")
  }
  ngOnInit() {
  }

}
