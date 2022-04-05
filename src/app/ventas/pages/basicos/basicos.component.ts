import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower:    string = 'christiam';
  nombreUpper:    string = 'CHRISTIAM';
  nombreCompleto: string = 'cHrisTiaM mOrI'

  fecha: Date = new Date();

}
