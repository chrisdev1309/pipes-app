import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  // i18Select  

  nombreAnt: string = '';
  generoAnt: string = '';

  nombre: string = 'Maria';
  genero: string = 'Femenino';

  invitacionMapa = {
    'Masculino': 'invitarlo',
    'Femenino' : 'invitarla'
  };

  //i18Plural
  clientes: string[] = ['Juan','Rosa','Luis','Susana','Alberto'];
  clientesMapa = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  };  

  cambiarPersona() {
  
      this.nombre = 'Pedro';  
      this.genero = 'Masculino';
 
  }

  eliminarCliente() {
    //var indice = this.clientes.indexOf('3'); // obtenemos el indice
    //this.clientes.splice(indice, 1); // 1 es la cantidad de elemento a eliminar

    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre:    'Christiam mori',
    edad  :    35,
    direccion: 'chiclayo, lambayeque, Peru'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'superman',
      vuela: true
    },
    {
      nombre: 'robin',
      vuela: false
    },
    {
      nombre: 'aquaman',
      vuela: true
    }            
  ]

  miObservable = interval(2000); // 1,2,3,4,5

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500);
  });

}
