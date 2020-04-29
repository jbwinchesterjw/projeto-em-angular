import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private router : Router) { }
  formulario1 = true;
  formulario2 = true;
  formulario3 = true;
  formulario4 = true;
  
  ngOnInit() {
   
  }
  public listarAlunos(){
    this.router.navigate(["list-alunos"]);
  }

  public listarProfessores(){
    this.router.navigate(["list-professores"]);
  }

  public listarModalidades(){
    this.router.navigate(["list-modalidades"]);
  }

  public ListaTurmas(){
    this.router.navigate(["list-turmas"]);
  }

}
