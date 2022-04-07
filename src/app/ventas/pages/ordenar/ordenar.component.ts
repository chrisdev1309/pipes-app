import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {
  enMayusculas: boolean = true;

  ngOnInit(): void {
    
  }

  cambiar() {
    this.enMayusculas = !this.enMayusculas;
  }
}
