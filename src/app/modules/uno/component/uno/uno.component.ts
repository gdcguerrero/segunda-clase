import { Component, OnInit } from '@angular/core';
import { CompartidoService } from '../../../../services/compartido.service';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {

  constructor(private compartidoService:CompartidoService) { }

  ngOnInit(): void {
    this.fillFrom();
  }

  public fillFrom(){
    let button = document.getElementById("btn");
    button?.addEventListener("click", () => {
      this.compartidoService.name = 'Diego';
      this.compartidoService.email = 'diego@gmail.com';
      console.log("1----",this.compartidoService);
    })
  }

}
