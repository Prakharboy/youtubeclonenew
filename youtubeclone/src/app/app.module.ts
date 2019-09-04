import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent,SafePipe } from './mainpage/mainpage.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { VideoplayingComponent } from './videoplaying/videoplaying.component';
import { HttpClient , HttpClientModule} from '@angular/common/http';
import {FormsModule}  from '@angular/forms';
import { DatafetchService } from './datafetch.service';







@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    FavoritesComponent,
    VideoplayingComponent,
    SafePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  

  ],
  providers: [DatafetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
