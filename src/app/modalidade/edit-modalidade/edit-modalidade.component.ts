import { Component, OnInit } from '@angular/core';
import { Modalidade } from 'src/app/class/modalidade/Modalidade';
import { ModalidadeServiceService } from 'src/app/modelidade-service/modalidade-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-modalidade',
  templateUrl: './edit-modalidade.component.html',
  styleUrls: ['./edit-modalidade.component.css']
})
export class EditModalidadeComponent implements OnInit {

  modalidades : Modalidade = new Modalidade();

  constructor(private service : ModalidadeServiceService, private router : Router) { }

  ngOnInit() {
    this.editarModalidade();
  }

  formulario = new FormGroup({
    id_modalidade : new FormControl(''),
    nome : new FormControl('')
  });

  public editarModalidade(){
    let id = localStorage.getItem("id");
    this.service.getModalidadeId(+id)
    .subscribe(retorno =>{
      this.modalidades = retorno
    });
  }

  public atualizarModalidade(modalidade : Modalidade){
    this.service.putModalidade(this.formulario.value)
    .subscribe(retorno =>{this.modalidades = retorno});
    alert("Modalidade atualizada com sucesso !");
    this.router.navigate(["list-modalidades"]);
  }


}
