import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAlunosComponent } from './alunos/add-alunos/add-alunos.component';
import { EditAlunosComponent } from './alunos/edit-alunos/edit-alunos.component';
import { ListAlunosComponent } from './alunos/list-alunos/list-alunos.component';
import { AddModalidadeComponent } from './modalidade/add-modalidade/add-modalidade.component';
import { EditModalidadeComponent } from './modalidade/edit-modalidade/edit-modalidade.component';
import { ListModalidadeComponent } from './modalidade/list-modalidade/list-modalidade.component';
import { AddProfessorComponent } from './professor/add-professor/add-professor.component';
import { EditProfessorComponent } from './professor/edit-professor/edit-professor.component';
import { ListProfessorComponent } from './professor/list-professor/list-professor.component';
import { AddTurmaComponent } from './turma/add-turma/add-turma.component';
import { EditTurmaComponent } from './turma/edit-turma/edit-turma.component';
import { ListTurmaComponent } from './turma/list-turma/list-turma.component';
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [
  {path : 'add-alunos', component : AddAlunosComponent},
  {path : 'edit-alunos', component : EditAlunosComponent},
  {path : 'list-alunos', component : ListAlunosComponent },

  {path : 'add-modalidades', component : AddModalidadeComponent},
  {path : 'edit-modalidades', component : EditModalidadeComponent},
  {path : 'list-modalidades', component : ListModalidadeComponent},

  {path : 'add-professores', component : AddProfessorComponent},
  {path : 'edit-professores', component : EditProfessorComponent},
  {path : 'list-professores', component : ListProfessorComponent},

  {path : 'add-turmas', component : AddTurmaComponent},
  {path : 'edit-turmas', component : EditTurmaComponent},
  {path : 'list-turmas', component : ListTurmaComponent},

  {path : '', component : PrincipalComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
