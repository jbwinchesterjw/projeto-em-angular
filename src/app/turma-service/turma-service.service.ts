import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Turma } from '../class/turma/Turma';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurmaServiceService {

  constructor(private http : HttpClient) { }

  private Url: string = 'http://localhost:8080/turma';

  public getTurma(): Observable<Turma[]> {
    return this.http.get<Turma[]>(this.Url + "/");
  }

  public postTurma(t: Turma): Observable<Turma> {
    return this.http.post<Turma>(this.Url + "/", t);
  }

  public getTurmaId(id: number) {
    return this.http.get<Turma>(this.Url + "/" + id);
  }
  
  public putTurma(t : Turma) : Observable<any> {
    return this.http.put(this.Url + "/",JSON.stringify(t));
  }

  public deleteTurma(t : Turma) : Observable<Turma>{
    return this.http.delete<Turma>(this.Url + "/" + t.id_turma);
  }
}
