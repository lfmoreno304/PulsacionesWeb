import { Component, OnInit } from '@angular/core';
import {Persona} from '../models/persona';
import {PersonaService} from '../../services/persona.service';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {
  perosna:Persona;
  constructor(private personaService:PersonaService) { }

  ngOnInit() {
    this.perosna=new Persona();
  }

  add(){
    this.personaService.post(this.perosna).subscribe(p => {
      if(p!=null){
        alert('Persona Creada!');
        this.perosna=p;
      }
    });
  }
}
