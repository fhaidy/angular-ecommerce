import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})

export class DataBindingComponent {
  public contadorClick: number = 0;
  public urlImagem = "https://angular.io/assets/images/logos/angular/angular.svg";
  public nome :string = "";
  
  incrementarContador(){
    this.contadorClick++;
  }

  zerarContador(){
    this.contadorClick = 0;
  }
}
