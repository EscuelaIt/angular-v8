import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hola a esta primera clase as';
  name = 'nicolas';

  rockbands: string[] = ['nirvana', 'los prisioneros', 'caas', 'as'];
  rockBandName = '';


  changeTitle() {
    this.title = 'nuevo titulo';
  }

  addRockBand() {
    this.rockbands.push(this.rockBandName);
    this.rockBandName = '';
  }

}
