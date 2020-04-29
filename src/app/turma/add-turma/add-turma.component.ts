import { Component, OnInit } from '@angular/core';
import { TurmaServiceService } from 'src/app/turma-service/turma-service.service';
import { Router } from '@angular/router';
import { Turma } from 'src/app/class/turma/Turma';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-turma',
  templateUrl: './add-turma.component.html',
  styleUrls: ['./add-turma.component.css']
})
export class AddTurmaComponent implements OnInit {

  turmas = new Turma();
  constructor(private service: TurmaServiceService, private router: Router) { }

  ngOnInit() {
  }

  formulario = new FormGroup({
    id_turma: new FormControl(''),
    nome: new FormControl(''),

  });

  public addTurma(): void {
    this.service.postTurma(this.formulario.value).subscribe(retorno => {
      alert("Turma salva com sucesso !");
      this.formulario.reset();
      this.router.navigate(["list-turmas"]);
    });

  }
}
