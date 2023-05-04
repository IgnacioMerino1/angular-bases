import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    constructor() { }
    
    public personajes:Personaje[] = [{
        id:uuid(),
        name: 'Krillin',
        power: 1000
    },{
        id:uuid(),
        name: 'Goku',
        power: 9500
    },{
        id:uuid(),
        name: 'Vegeta',
        power: 7500
    }];

    agregarPersonaje(per: Personaje):void{

        const nuevoPer: Personaje = { ...per, id: uuid() };
        this.personajes.push(nuevoPer);
    }

//    borrarPersonaje(index: number):void{
//        this.personajes.splice(index,1);
//    }

    borrarPersonajePorId(id: string):void{

        console.log(id);

        //debugger;
        this.personajes = this.personajes.filter(personaje => personaje.id !== id);
    }

}