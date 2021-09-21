import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsDetailComponent } from './components/comics-detail/comics-detail.component';
import { ComicsComponent } from './components/comics/comics.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

const routes: Routes = [
  { path: "comics", component: ComicsComponent },
  { path: "peliculas", component: PeliculasComponent },
  // { path: 'comicsDetail/:id/:titulo/:descripcion/:imgUrl', component: ComicsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
