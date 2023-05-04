import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public listaPersonajes: Personaje[] = [{
    id: 'ID',
    name:'Trunks',
    power:10
  }]

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeletePersonaje(id?:string):void{
    if(!id)  return;
    
    console.log(id);
    this.onDeleteId.emit(id);
  }
}
