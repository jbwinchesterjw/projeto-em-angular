import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Professor } from 'src/app/class/professor/Professor';
import { ProfessorServiceService } from 'src/app/professor-service/professor-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-professor',
  templateUrl: './add-professor.component.html',
  styleUrls: ['./add-professor.component.css']
})
export class AddProfessorComponent implements OnInit {

  professores = new Professor();
  constructor(private service : ProfessorServiceService, private router : Router ) { }

  ngOnInit() {
  }

  
  formulario = new FormGroup({
    id_professor : new FormControl(''),
    nome : new FormControl(''), 
    
  });

    public addProfessor() : void{
    this.service.postProfessor(this.formulario.value).subscribe(retorno =>{
      alert("Professor salvo com sucesso !");
     this.formulario.reset();
     this.router.navigate(["list-professores"]);
    });
  }


}
