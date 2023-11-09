import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curriculumV2';

  ngOnInit(): void{
    

    $("#titulo").html("Jquery listo");

  }


  msj(){
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }
}
