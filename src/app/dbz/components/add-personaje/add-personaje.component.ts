import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrls: ['./add-personaje.component.css']
})
export class AddPersonajeComponent {

  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personaje: Personaje = {
    name:'',
    power:0
  };

  emitirPersonaje():void {
    console.log(this.personaje);
    if(this.personaje.name.length === 0) return;

    this.onNewPersonaje.emit(this.personaje);
    this.personaje = { name:'', power:0 };
/*
    this.onNewPersonaje.emit({...this.personaje});
    this.personaje.name='';
    this.personaje.power=0;
*/
  }
}
