import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoyerComponent } from './foyer.component'; // Assurez-vous d'importer le composant FoyerComponent
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FoyerComponent // Déclarez le composant FoyerComponent ici
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Importez HttpClientModule ici

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
