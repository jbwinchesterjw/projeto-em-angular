import { Component, OnInit } from '@angular/core';
import { Turma } from 'src/app/class/turma/Turma';
import { FormGroup, FormControl } from '@angular/forms';
import { TurmaServiceService } from 'src/app/turma-service/turma-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-turma',
  templateUrl: './edit-turma.component.html',
  styleUrls: ['./edit-turma.component.css']
})
export class EditTurmaComponent implements OnInit {

  turmas : Turma = new Turma();

  constructor(private service : TurmaServiceService, private router : Router ) { }

  ngOnInit() {
    this.editarTurma();
  }

  formulario = new FormGroup({
    id_turma : new FormControl(''),
    nome : new FormControl('')
  });

  public editarTurma(){
    let id = localStorage.getItem("id");
    this.service.getTurmaId(+id)
    .subscribe(retorno =>{
      this.turmas = retorno
    });
  }

  public atualizarTurma(turma : Turma){
    this.service.putTurma(this.formulario.value)
    .subscribe(retorno =>{this.turmas = retorno});
    alert("Turma atualizado com sucesso !");
    this.router.navigate(["list-turmas"]);
  }

}
