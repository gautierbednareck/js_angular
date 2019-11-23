import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  date = new Date().toISOString().substring(0, 10);
  tasks = []
  onSubmit(f: NgForm) {
    if (f.valid) this.tasks.push(f.value);
  }
}
