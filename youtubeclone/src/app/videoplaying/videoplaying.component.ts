import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-videoplaying',
  templateUrl: './videoplaying.component.html',
  styleUrls: ['./videoplaying.component.css']
})
export class VideoplayingComponent implements OnInit {

  public rvideoid;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');
    this.rvideoid=id;
  }

}
