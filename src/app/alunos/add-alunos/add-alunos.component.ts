import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { AlunoServiceService } from 'src/app/aluno-serice/aluno-service.service';
import { Aluno } from 'src/app/class/aluno/Aluno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-alunos',
  templateUrl: './add-alunos.component.html',
  styleUrls: ['./add-alunos.component.css']
})
export class AddAlunosComponent implements OnInit {

  alunos = new Aluno();
  
  constructor(private service : AlunoServiceService, private router : Router) { }

  ngOnInit() {
  }

  formulario = new FormGroup({
    id_aluno : new FormControl(''),
    nome : new FormControl(''), 
    
  });

    public addAluno() : void{
    this.service.postAlunos(this.formulario.value).subscribe(retorno =>{
      alert("Aluno salvo com sucesso !");
     this.formulario.reset();
     this.router.navigate(["list-alunos"]);
    });
  }

}
