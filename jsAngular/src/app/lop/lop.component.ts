import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lop',
  templateUrl: './lop.component.html',
  styleUrls: ['./lop.component.css']
})
export class LopComponent implements OnInit {


  message:string;

  constructor(public data: DataService) { }

  ngOnInit() {
    this.data.text  }


}


// -----------
// @Component({
//   selector: 'app-lop',
//   template: `
//     {{message}}
//     <button (click)="newMessage()">New Message</button>
//   `,
//   styleUrls: ['./lop.component.css']
// })
// export class LopComponent implements OnInit {

//   message:string;

//   constructor(private data: DataService) { }

//   ngOnInit() {
//     this.data.text  }

//   newMessage() {
//     console.log(this.data.text)  }

// }
