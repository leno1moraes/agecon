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

  concursos: ConcursoModel[]=[];
  concursosAgrupados: { [key: string]: any[] } = {};

  constructor(
    private concursoservice: ConcursoService,
  ){}

  ngOnInit(): void {
    this.prepararPagina();
  }

  /*public prepararPagina(){
    this.concursoservice.listConcursos().subscribe((result) =>{
      this.concursos = result;
      console.log("Dados concursos: ", this.concursos);
    });
  }*/

  public prepararPagina(){
    this.concursoservice.listConcursosStatus().subscribe((result) =>{
      this.concursos = result;
      

      this.concursosAgrupados = this.concursos.reduce((acc, concurso) => {
        if (!acc[concurso.titulo]) {
          acc[concurso.titulo] = [];
        }
        acc[concurso.titulo].push(concurso);
        return acc;
      }, {} as { [key: string]: any[] });

    });  

    console.log("Dados concursos: ", this.concursos);
    console.log("Dados concursos agrupados: ", this.concursosAgrupados);
  }  


}
