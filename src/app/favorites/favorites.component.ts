import { Component, OnInit } from '@angular/core';

import { Observable } from  "rxjs/Observable";

import { HttpClient } from  "@angular/common/http";
import { DatafetchService } from '../datafetch.service';



@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

public ayacomment:[];

public tempp:[];

  constructor(private verygood:DatafetchService,private dtemp:DatafetchService) { }

  ngOnInit() {
    this.dtemp.getmcomment().subscribe((data) =>{ console.log(data);this.ayacomment=data});
  }

deleteplease(itemmm)
{
  //deleteservice
  this.dtemp.deleteservice(itemmm).subscribe((data) =>{ console.log("deleted");});
}

adddcomment(objk,cmnttxt)
 {
this.dtemp.adddcommentservice(objk,cmnttxt).subscribe((data) =>{ console.log("comment added");});
 }

 padcoment(objid,cmntn)
 {
  this.dtemp.adddcommentservice(objid,cmntn).subscribe((data) =>{ console.log("patch added");});
 }



}
