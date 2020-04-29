import { Injectable } from '@angular/core';
import { Modalidade } from '../class/modalidade/Modalidade';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModalidadeServiceService {

  constructor(private http: HttpClient) { }

  private Url: string = 'http://localhost:8080/modalidade';

  public getModalidade(): Observable<Modalidade[]> {
    return this.http.get<Modalidade[]>(this.Url + "/");
  }

  public postModalidade(m: Modalidade): Observable<Modalidade> {
    return this.http.post<Modalidade>(this.Url + "/", m);
  }

  public getModalidadeId(id: number) {
    return this.http.get<Modalidade>(this.Url + "/" + id);
  }

  public putModalidade(m: Modalidade): Observable<any> {
    return this.http.put(this.Url + "/", JSON.stringify(m));
  }

  public deleteModalidade(m: Modalidade): Observable<Modalidade> {
    return this.http.delete<Modalidade>(this.Url + "/" + m.id_modalidade);

  }
}
