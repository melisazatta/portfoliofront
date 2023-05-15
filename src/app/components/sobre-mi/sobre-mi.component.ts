import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  persona: persona = null;

  constructor( public personaService: PersonaService) {}

  ngOnInit(): void {
    this.cargarPersona()
    // this.personaService.getPersona().subscribe(data => { this.persona = data})
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(data =>
      {
        this.persona = data
      })
  }

}
