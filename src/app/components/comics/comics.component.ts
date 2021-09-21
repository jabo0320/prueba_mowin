import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})


export class ComicsComponent implements OnInit {

  comics = [
    {
      "id": 1,
      "titulo": "Dead of the family",
      "descripcion": "Muerte de la familia",
      "tipo": "DC",
      "imgUrl": "assets/img/dotf.jpg"
    },
    {
      "id": 2,
      "titulo": "The Killing Joke",
      "descripcion": "La broma asesina",
      "tipo": "DC",
      "imgUrl": "assets/img/lba.GIF"
    },   
    {
      "id": 3,
      "titulo": "Spider-man",
      "descripcion": "El hombre araña",
      "tipo": "Marvel",
      "imgUrl": "assets/img/spider.jpg"
    },  
    {
      "id": 4,
      "titulo": "Deadpool",
      "descripcion": "Chimichangas",
      "tipo": "Marvel",
      "imgUrl": "assets/img/dead.jpg"
    },              
  
  ]
  
  constructor() { }
  
  
  
  ngOnInit(): void {
  }

}
