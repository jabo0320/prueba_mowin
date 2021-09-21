import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  titulo: string = "Películas de Pixar";
  
  constructor() { }

  ngOnInit(): void {
  }

}
