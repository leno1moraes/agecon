import { Injectable } from '@angular/core';
import { environment } from '../env/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConcursoModel } from '../models/concursoModel';

@Injectable({
  providedIn: 'root'
})
export class ConcursoService {
  private readonly API = environment.urlApi;

  constructor(private http: HttpClient) { }

  public listConcursos(): Observable<ConcursoModel[]>{
    const url = 'concurso';
    console.log("Rota de Teste: ", this.API+url);
    return this.http.get<ConcursoModel[]>(this.API+url);
  }
   
}
