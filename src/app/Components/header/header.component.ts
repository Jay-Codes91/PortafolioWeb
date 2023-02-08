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

  perfil(){
    Swal.fire({
      imageUrl: 'assets/Foto Curriculum 2.png',
      imageHeight: 100,
      imageWidth: 100,
      title: 'Acerca de mi',
      html: '<p><b>Descripción: </b> Desarrollador web con amplio conocimiento en el Front-end y básico en el Back-end.</p><br>'+
            '<p><b>Experiencia: </b> Proyecto Final de Graduación (2022) - Agenda de Reservas de Espacios de Trabajo para la Escuela de Ciencias Exactas y Naturales de la UNED</p><br>' +
            '<p><b>Preparación Académica: </b>Bachiller en Ingeniería Informática - UNED (2022)</p><br>'+
            '<p><b>Idiomas: </b> Español (Nativo), Inglés (Intermedio)</p>',

      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#42A5F5'
    })
  }

}
