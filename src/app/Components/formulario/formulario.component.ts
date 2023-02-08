import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
declare var Swal: any;
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) { 
    this.form = this.fb.group({
      from_name: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(20)
      ])],
      message: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(100)
      ])],
      email_id: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(50),
        Validators.email
      ])],
    })
  }

  ngOnInit(): void {
  }

  sendEmail(e: Event){
    e.preventDefault();

    emailjs.sendForm('service_mjwciio', 'template_s1zlape', e.target as HTMLFormElement, 'pFb9NJhwKvCcuFP-e')
      .then((result: EmailJSResponseStatus) => {
        Swal.fire({
          icon: 'success',
          title: 'Su mensaje ha sido enviado',
          confirmButtonText: 'Aceptar'
        })
        this.form.reset();
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'No se ha podido enviar su mensaje',
          confirmButtonText: 'Aceptar'
        })
      });

      
  }

}
