import { Component, OnInit } from '@angular/core';
declare var Swal: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  msj: string = '';

  constructor() { 
    this.msj = 'Elaboro páginas web elegantes y adaptables a todos los dispositivos con las tecnologías de Angular y .Net Core';
  }

  ngOnInit(): void {
    
  }

  

}
