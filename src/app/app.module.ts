import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { TecnologiasComponent } from './Components/tecnologias/tecnologias.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PerfilComponent } from './Components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactoComponent,
    TecnologiasComponent,
    FooterComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
