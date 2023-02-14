import { Component, OnInit } from '@angular/core';
declare var AOS: any;
declare var Swal: any;
declare var bootstrap: any;
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  colorBotonesConfirm: string = '#42A5F5';
  constructor() { }

  ngOnInit(): void {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
        })
  }

  telefono(){
    Swal.fire({
      icon: 'info',
      title: 'Telefonos de contacto',
      html: '<i class="fa-solid fa-house"></i> 4705 2048 <br><br>' +
            '<i class="fa-solid fa-mobile-screen"></i> 8333 9005',
      confirmButtonColor: this.colorBotonesConfirm,
      confirmButtonText: 'Aceptar'
    })
  }

  email(){
    Swal.fire({
      icon: 'info',
      title: 'Email',
      html: '<i class="fa-solid fa-envelope"></i> yeiko.munoz.a91@gmail.com',
      confirmButtonColor: this.colorBotonesConfirm,
      confirmButtonText: 'Aceptar'
    })
  }

  ubicacion(){
    Swal.fire({
      icon: 'info',
      title: 'Residencia',
      html: '<i class="fa-solid fa-location-dot"></i> Loma Linda, Desamparados',
      confirmButtonColor: this.colorBotonesConfirm,
      confirmButtonText: 'Aceptar'
    })
  }

}
