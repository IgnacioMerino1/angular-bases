import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz-service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

   constructor(private dbzService: DbzService) { }

   get personajes(): Personaje[] {
    //return this.dbzService.personajes;
    return [...this.dbzService.personajes];
   }

   borrarPersonaje(id: string):void {
    this.dbzService.borrarPersonajePorId(id);
   }

   agregarPersonaje(per: Personaje) {
    this.dbzService.agregarPersonaje(per);

   }
}