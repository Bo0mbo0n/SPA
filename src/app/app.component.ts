import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Yanet";
  nombre1 = "IVONE YANET ESTRADA BUENDIA";

  arreglo = [10,1,2,3,26,5,6,7,8,9];
  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  minion = {
    nombre:"Bob",
    clave:"Despicable me",
    edad:18,
    direccion:{
      calle:"Villa Residencial",
      casa:"Gru"
    }
  }

  valorDePromesa = new Promise( (resolve, reject ) =>{

    setTimeout( ()=> resolve('Llego info!'),3500);

  })

  fecha = new Date();

  video = "mOeSfOJrUIk";

 //mostrar = true;
  //contrasena= activar;
  

}
