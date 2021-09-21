import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comics-detail',
  templateUrl: './comics-detail.component.html',
  styleUrls: ['./comics-detail.component.css']
})
export class ComicsDetailComponent implements OnInit {
  id:any;
  titulo: string = "";
  descripcion: string = "";
  imgUrl: string = "";

  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    this.titulo = this._Activatedroute.snapshot.paramMap.get("titulo")!.toString();
    this.descripcion = this._Activatedroute.snapshot.paramMap.get("descripcion")!.toString();
    this.imgUrl = this._Activatedroute.snapshot.paramMap.get("imgUrl")!.toString();

    
  }

}
