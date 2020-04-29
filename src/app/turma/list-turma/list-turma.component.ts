import { Component, OnInit } from '@angular/core';
import { TurmaServiceService } from 'src/app/turma-service/turma-service.service';
import { Turma } from 'src/app/class/turma/Turma';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-turma',
  templateUrl: './list-turma.component.html',
  styleUrls: ['./list-turma.component.css']
})
export class ListTurmaComponent implements OnInit {

  turmas : Turma[];

  constructor(private service : TurmaServiceService, private router : Router) { }

  ngOnInit() {
    this.service.getTurma()
    .subscribe(data => {
      this.turmas = data;
    });
  }

  public editarTurma(){
    this.router.navigate(["edit-turmas"]);
  }
 
  public excluirTurma(turma : Turma){
    this.service.deleteTurma(turma)
    .subscribe(retorno=>{
      this.turmas=this.turmas.filter(t=>t!==turma);
      alert("Turma excluida com sucesso !");
    })
  }

  public novaTruma(){
    this.router.navigate(["add-turmas"]);
  }

}
