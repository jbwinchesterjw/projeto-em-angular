import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/class/aluno/Aluno';
import { FormGroup, FormControl } from '@angular/forms';
import { AlunoServiceService } from 'src/app/aluno-serice/aluno-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-alunos',
  templateUrl: './list-alunos.component.html',
  styleUrls: ['./list-alunos.component.css']
})
export class ListAlunosComponent implements OnInit {

  alunos : Aluno[];
  
  constructor(private service : AlunoServiceService, private router : Router) { }

  ngOnInit() {
    this.service.getAlunos()
    .subscribe(data => {
      this.alunos = data;
    });
  }

  formulario = new FormGroup({
    id_aluno : new FormControl(''),
    nome : new FormControl('')
  });
  
  public editarAluno(a : Aluno):void{
    this.service.putAlunos(this.formulario.value)
    .subscribe(retorno =>{
      this.alunos.push(retorno)
      this.router.navigate(["edit-alunos"]);
    })
  }
 
  public excluirAluno(aluno : Aluno){
    this.service.deleteAlunos(aluno)
    .subscribe(retorno=>{
      this.alunos=this.alunos.filter(a=>a!==aluno);
      alert("Aluno excluido com sucesso !");
    })
  }

  public novoAluno(){
    this.router.navigate(["add-alunos"]);
  }

}
