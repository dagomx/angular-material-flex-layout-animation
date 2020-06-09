import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  private _showSearch = false;
  set searchActive(value: boolean) {
    console.log('Valor: ', value);
    this._showSearch = value;
  }

  get searchActive() {
    return this._showSearch;
  }
}


