import { Component, OnInit } from '@angular/core';
import { ProfessorServiceService } from 'src/app/professor-service/professor-service.service';
import { Router } from '@angular/router';
import { Professor } from 'src/app/class/professor/Professor';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-professor',
  templateUrl: './edit-professor.component.html',
  styleUrls: ['./edit-professor.component.css']
})
export class EditProfessorComponent implements OnInit {

  professores: Professor = new Professor();

  constructor(private service: ProfessorServiceService, private router: Router) { }

  ngOnInit() {
    this.editarProfessor();
  }

  formulario = new FormGroup({
    id_professor: new FormControl(''),
    nome: new FormControl('')
  });

  public editarProfessor() {
    let id = localStorage.getItem("id");
    this.service.getProfessorId(+id)
      .subscribe(retorno => {
        this.professores = retorno
      });

  }
}
