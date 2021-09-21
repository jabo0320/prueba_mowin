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
      "descripcion": "Es una línea argumental crossover perteneciente a la línea de historietas de DC Comics The New 52 que entrelaza un total 23 cómics protagonizados por Batman y sus aliados. Publicados entre finales del año 2012 e inicio del 2013, su argumento principal es desarrollado en nueve series de historietas y cuenta con el regreso del villano conocido como Joker;2​3​ El personaje aparece buscando vengarse de varios héroes y villanos del Universo DC, entre los cuales están, Robin, Nightwing, Batgirl, el jefe de policía James Gordon, Red Hood y Batman. El nombre de la saga hace referencia a la novela gráfica Batman: A Death in the Family,4​ en el arco argumental de la novela anteriormente nombrada, Jason Todd —que en ese momento acompañaba a Batman utilizando el traje de Robin— es asesinado por el Joker. La trama ha recibido críticas generalmente positivas, en especial el cómic de Batman n.º 13, que se consideró: «Acertadamente grandioso y lleno de tensión, por lo increíble del regreso del villano».5​ ",
      "tipo": "DC",
      "imgUrl": "assets/img/dotf.jpg"
    },
    {
      "id": 2,
      "titulo": "The Killing Joke",
      "descripcion": "Batman: la broma asesina, conocida también en Hispanoamérica como Batman: la broma macabra y Batman: la broma mortal— es una novela gráfica de Batman publicada por la editorial estadounidense DC Comics en 1988, escrita por Alan Moore, dibujada por Brian Bolland y coloreada por John Higgins.1​2​ Su título ha sido traducido al español con más de una variación debido a que es una expresión en inglés inexistente en el primer idioma, que se refiere a dos lecturas o sentidos: «Una broma para morir de la risa», y a su vez a la oscura referencia humorística de un asesinato criminal. La obra iba a ser publicada originalmente en 1987, pero su lanzamiento se retrasó un año por diversos problemas.3​ La historia examina el trasfondo del villano conocido como el Joker y muestra sus orígenes y primer encuentro con el Hombre Murciélago. La historia del cómic es famosa por su nudo argumental, en el cual el villano decide atacar al jefe de policía de Gotham James Gordon, a quien intenta volver loco, y a su hija Barbara, a quien dejaría paralítica luego de dispararle a quemarropa.",
      "tipo": "DC",
      "imgUrl": "assets/img/lba.GIF"
    },
    {
      "id": 3,
      "titulo": "Spider-man",
      "descripcion": "The Amazing Spider-Man es una serie de cómics estadounidenses publicada por Marvel Comics, con el superhéroe ficticio Spider-Man como su principal protagonista. Estando en la continuidad general de la franquicia, comenzó a publicarse en 1963 como publicación periódica mensual y se publicó continuamente, con una breve interrupción en 1995, hasta su relanzamiento con un nuevo orden de numeración en 1999. En 2003, la serie volvió al orden de numeración. del primer volumen. El título se ha publicado ocasionalmente cada dos semanas y se publicó tres veces al mes de 2008 a 2010. Un videojuego basado en la serie de cómics se lanzó en 2000 y una película que lleva el nombre de la serie de cómics se publicó el 3 de julio de 2012. ",
      "tipo": "Marvel",
      "imgUrl": "assets/img/spider.jpg"
    },
    {
      "id": 4,
      "titulo": "Deadpool",
      "descripcion": "Wade Winston Wilson, más conocido como Deadpool,5​ (y en España también como Masacre en los cómics de Forum y Panini) es un personaje ficticio, mercenario, supervillano6​7​ y antihéroe,8​ que aparece en los cómics publicados por Marvel Comics. Creado por el artista Rob Liefeld y el escritor Fabian Nicieza, Deadpool apareció por primera vez en New Mutants (vol. 1) #98 (1991).Como un mercenario mentalmente inestable y desfigurado, Deadpool apareció originalmente como un villano en el cómic New Mutants, y más tarde en ediciones de X-Force. Desde entonces, el personaje ha protagonizado varias series en curso, y comparte títulos con otros personajes, como Cable. Conocido como el Mercenario Bocón (Merc with a Mouth en inglés; Mercenario Bocazas en España), es famoso por su naturaleza comunicativa y por su tendencia a romper la cuarta pared, un recurso utilizado por los escritores para un efecto humorístico. Su mayor enemigo es Taskmaster. ",
      "tipo": "Marvel",
      "imgUrl": "assets/img/dead.jpg"
    },

  ]

  constructor() { }



  ngOnInit(): void {
  }

}
