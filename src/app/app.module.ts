import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAlunosComponent } from './alunos/add-alunos/add-alunos.component';
import { EditAlunosComponent } from './alunos/edit-alunos/edit-alunos.component';
import { ListAlunosComponent } from './alunos/list-alunos/list-alunos.component';
import { AddModalidadeComponent } from './modalidade/add-modalidade/add-modalidade.component';
import { ListModalidadeComponent } from './modalidade/list-modalidade/list-modalidade.component';
import { EditModalidadeComponent } from './modalidade/edit-modalidade/edit-modalidade.component';
import { AddProfessorComponent } from './professor/add-professor/add-professor.component';
import { ListProfessorComponent } from './professor/list-professor/list-professor.component';
import { EditProfessorComponent } from './professor/edit-professor/edit-professor.component';
import { AddTurmaComponent } from './turma/add-turma/add-turma.component';
import { EditTurmaComponent } from './turma/edit-turma/edit-turma.component';
import { ListTurmaComponent } from './turma/list-turma/list-turma.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAlunosComponent,
    EditAlunosComponent,
    ListAlunosComponent,
    AddModalidadeComponent,
    ListModalidadeComponent,
    EditModalidadeComponent,
    AddProfessorComponent,
    ListProfessorComponent,
    EditProfessorComponent,
    AddTurmaComponent,
    EditTurmaComponent,
    ListTurmaComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
