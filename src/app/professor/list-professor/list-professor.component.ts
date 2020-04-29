import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/class/professor/Professor';
import { Router } from '@angular/router';
import { ProfessorServiceService } from 'src/app/professor-service/professor-service.service';

@Component({
  selector: 'app-list-professor',
  templateUrl: './list-professor.component.html',
  styleUrls: ['./list-professor.component.css']
})
export class ListProfessorComponent implements OnInit {

  professores : Professor[];
  constructor(private service : ProfessorServiceService, private router : Router) { }

  ngOnInit() {
    this.service.getProfessor()
    .subscribe(data => {
      this.professores = data;
    });
  }

  public editarProfessor(){
    this.router.navigate(["edit-professores"]);
  }
 
  public excluirProfessor(professor : Professor){
    this.service.deleteProfessor(professor)
    .subscribe(retorno=>{
      this.professores=this.professores.filter(p=>p!==professor);
      alert("Professor excluido com sucesso !");
    })
  }

  public novoProfessor(){
    this.router.navigate(["add-professores"]);
  }

}
