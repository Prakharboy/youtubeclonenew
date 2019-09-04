import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DatafetchService } from '../datafetch.service';




@Component({
  selector: 'app-videoplaying',
  templateUrl: './videoplaying.component.html',
  styleUrls: ['./videoplaying.component.css']
})
export class VideoplayingComponent implements OnInit {

  public rvideoid;
  public url="https://www.youtube.com/embed/";
  

  constructor(private route:ActivatedRoute,private dtemp:DatafetchService) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');
    this.rvideoid=id;

    
  }



}
