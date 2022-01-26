import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zwo-calculator';
  num1:number = 0;
  num2:number = 0;
  results:any = 0;

  operators(symbol: string){
    this.results = this.num1 + this.num2

    if (this.num1/this.num2){
      this.results = "Can't Divivde by 0"
    }

    if (symbol == '+'){
      this.results = this.num1 + this.num2  
    }
    else if (symbol == '-'){
      this.results = this.num1 - this.num2
    }
    else if ((symbol == '/') &&(this.num2!==0)){
      this.results = this.num1 / this.num2
    }
    else if (symbol == '*'){
      this.results = this.num1 * this.num2
    }
  }
}
