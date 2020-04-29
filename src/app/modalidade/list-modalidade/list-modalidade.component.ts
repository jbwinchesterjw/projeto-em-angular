import { Component, OnInit } from '@angular/core';
import { Modalidade } from 'src/app/class/modalidade/Modalidade';
import { ModalidadeServiceService } from 'src/app/modelidade-service/modalidade-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-modalidade',
  templateUrl: './list-modalidade.component.html',
  styleUrls: ['./list-modalidade.component.css']
})
export class ListModalidadeComponent implements OnInit {

  modalidades : Modalidade[];
  constructor(private service : ModalidadeServiceService, private router : Router) { }

  ngOnInit() {
    this.service.getModalidade()
    .subscribe(data => {
      this.modalidades = data;
    });
  }

  public editarModalidade(){
    this.router.navigate(["edit-modalidades"]);
  }
 
  public excluirModalidade(modalidade : Modalidade){
    this.service.deleteModalidade(modalidade)
    .subscribe(retorno=>{
      this.modalidades=this.modalidades.filter(m=>m!==modalidade);
      alert("Modalidade excluida com sucesso !");
    })
  }

  public novaModalidade(){
    this.router.navigate(["add-modalidades"]);
  }


}
