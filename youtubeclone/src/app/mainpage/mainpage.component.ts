import { Component, OnInit } from '@angular/core';
import { DatafetchService } from '../datafetch.service';
import {Id, itemInterface} from 'bad';
import {Pipe,PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Snippet} from 'try';
import {Router} from '@angular/router';
import { from } from 'rxjs';


@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform{
  constructor(private sanitizer: DomSanitizer){}
  transform(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  public servicecheck="";
  public  empll:itemInterface[];
  public searchl:itemInterface[];     
  public hjh:Snippet[];               //itemInterface
  public errormsg;
  public url="https://www.youtube.com/embed/";
  public video_id="wUVvTqvjUaM";
  public idholder=[];

  constructor(private emp:DatafetchService,private temp:DatafetchService,private router:Router) { }

  ngOnInit() {
    

    this.emp.getad().subscribe((data) =>{ console.log(data.items);this.hjh=data.items});
    console.log(this.empll);
    
}

searchevent(inputy)
{
  this.temp.searchevents(inputy).subscribe((data) =>{ console.log(data.items);this.hjh=data.items});
}
  
  onselect(videoidfp)
  {
    let barun_id:string=videoidfp.id.videoId;
    // this.router.navigate('/videoplayingn',barun_id);
    
    
    this.router.navigate(['']).then(()=>{this.router.navigateByUrl(`videoplayingn/${barun_id}`)});
  }
  
}
