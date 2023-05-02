import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { TecnologiasComponent } from './Components/tecnologias/tecnologias.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactoComponent,
    TecnologiasComponent,
    FooterComponent,
    PerfilComponent,
    FormularioComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
