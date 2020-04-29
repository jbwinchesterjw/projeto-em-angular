import { Component, OnInit } from '@angular/core';
import { ModalidadeServiceService } from 'src/app/modelidade-service/modalidade-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Modalidade } from 'src/app/class/modalidade/Modalidade';

@Component({
  selector: 'app-add-modalidade',
  templateUrl: './add-modalidade.component.html',
  styleUrls: ['./add-modalidade.component.css']
})
export class AddModalidadeComponent implements OnInit {

  modalidades = new Modalidade();

  constructor(private service : ModalidadeServiceService, private router : Router) { }

  ngOnInit() {
  }

  formulario = new FormGroup({
    id_modalidade : new FormControl(''),
    nome : new FormControl(''), 
    
  });


  public addModalidade() : void{
    this.service.postModalidade(this.formulario.value).subscribe(retorno =>{
      alert("Modalidade salvo com sucesso !");
     this.formulario.reset();
     this.router.navigate(["list-modalidades"]);
    });
  }


}
