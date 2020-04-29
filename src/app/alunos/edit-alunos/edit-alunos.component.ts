import { Component, OnInit } from '@angular/core';
import { AlunoServiceService } from 'src/app/aluno-serice/aluno-service.service';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/class/aluno/Aluno';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-alunos',
  templateUrl: './edit-alunos.component.html',
  styleUrls: ['./edit-alunos.component.css']
})
export class EditAlunosComponent implements OnInit {

  alunos : Aluno = new Aluno();
  
  constructor(private router : Router, private service : AlunoServiceService) { }

  ngOnInit() {
  this.editarAluno();
  }

  formulario = new FormGroup({
    id_aluno : new FormControl(''),
    nome : new FormControl('')
  });

  public editarAluno(){
    let id = localStorage.getItem("id");
    this.service.getAlunosId(+id)
    .subscribe(retorno =>{
      this.alunos = retorno
    });
  }

  public atualizarAluno(aluno : Aluno){
    this.service.putAlunos(aluno)
    .subscribe(data =>{this.alunos = data});
    alert("Aluno atualizado com sucesso !");
    this.router.navigate(["list-alunos"]);
  }

}
