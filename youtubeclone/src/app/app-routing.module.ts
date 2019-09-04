import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoplayingComponent } from './videoplaying/videoplaying.component';
import{MainpageComponent} from './mainpage/mainpage.component';
import { FavoritesComponent } from './favorites/favorites.component';



const routes: Routes = [
  {path:'',redirectTo:'/mainpagen',pathMatch:'full'},
  {path:'mainpagen', component:MainpageComponent},
  {path:'videoplayingn/:id',component:VideoplayingComponent},
  {path:'favoritesn',component:FavoritesComponent},
  {path:'**',component:MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
