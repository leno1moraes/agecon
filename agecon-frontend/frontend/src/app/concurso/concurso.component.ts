import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcursoModel } from '../models/concursoModel';
import { ConcursoService } from '../services/concurso.service';

@Component({
  selector: 'app-concurso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './concurso.component.html',
  styleUrl: './concurso.component.css'
})
export class ConcursoComponent implements OnInit {

  public concursoModel: ConcursoModel[]=[];

  constructor(
    private concursoservice: ConcursoService,
  ){}

  ngOnInit(): void {
    this.prepararPagina();
  }

  public prepararPagina(){
    this.concursoservice.listConcursos().subscribe((result) =>{
      this.concursoModel = result;
      console.log("Dados concursos: ", this.concursoModel);
    });
  }

}
