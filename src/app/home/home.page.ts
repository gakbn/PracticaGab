import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit{


  constructor() {}

  ngOnInit(){
    console.log("hola mundo");
    console.log("este es el primer componentes");

  }

}