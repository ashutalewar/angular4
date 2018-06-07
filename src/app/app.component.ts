import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  amount = 100
  stage = 1

	// ngOnInit(): void {
	// 	this.amount = 100
	// }


  onClickMe() {
    // this.clickMessage = 'You are my hero!';
    console.log(this.amount)
    this.stage = 2
  }

}
