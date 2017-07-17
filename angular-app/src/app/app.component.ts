import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  note  = {
    note: '',
  }

  onSubmit(){
    console.log("onSubmit()");
  }
}


/*https://coursetro.com/posts/code/59/Angular-4-Event-Binding*/