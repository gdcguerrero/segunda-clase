import { Component, OnInit } from '@angular/core';
import { CompartidoService } from '../../../../services/compartido.service';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.scss']
})
export class DosComponent implements OnInit {

  constructor(public compartidoService:CompartidoService) { 
    
  }

  ngOnInit(): void {
    this.btnUpdate();
  }

  getDataForm(){
    let name : HTMLInputElement = <HTMLInputElement> document.getElementById('name');
    let email : HTMLInputElement = document.getElementById('email') as HTMLInputElement;

    name.value = this.compartidoService.name
    email.value = this.compartidoService.email
    
    console.log("2----",this.compartidoService);
  }

  btnUpdate(){
    let update = document.getElementById('update');
    update?.addEventListener("click", () => {
      this.getDataForm();
    })
  }
}