import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor } from '../class/professor/Professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorServiceService {

  constructor(private http : HttpClient) { }

  private Url: string = 'http://localhost:8080/professor';

  public getProfessor(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.Url + "/");
  }

  public postProfessor(p: Professor): Observable<Professor> {
    return this.http.post<Professor>(this.Url + "/", p);
  }

  public getProfessorId(id: number) {
    return this.http.get<Professor>(this.Url + "/" + id);
  }
  
  public putProfessor(p: Professor) : Observable<any> {
    return this.http.put(this.Url + "/",JSON.stringify(p));
  }

  public deleteProfessor(p : Professor) : Observable<Professor>{
    return this.http.delete<Professor>(this.Url + "/" + p.id_professor);
  }
}
