import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  expe: Experiencia[] = [];
  constructor(private sExperiencia: SExperienciaService) { }
  ngOnInit(): void {
    this.cargarExperiencia();
  }
  cargarExperiencia() {
    this.sExperiencia.lista().subscribe(data => { this.expe = data; })
  }

  delete(id?: number): void{
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}