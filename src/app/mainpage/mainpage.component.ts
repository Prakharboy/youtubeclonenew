import { Component, OnInit } from '@angular/core';
import { DatafetchService } from '../datafetch.service';
import {Id, itemInterface} from 'bad';
import {Pipe,PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
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
  public hjh:[];               //itemInterface
  public errormsg;
  public url="https://www.youtube.com/embed/";
  public video_id="wUVvTqvjUaM";
  public data;

  constructor(private boy:DatafetchService ,private emp:DatafetchService,private temp:DatafetchService,private router:Router,private dtemp:DatafetchService) { }

  ngOnInit() {
    

    this.emp.getad().subscribe((data) =>{ console.log(data.items);this.hjh=data.items});
    
    
}

searchevent(inputy)
{
  this.temp.searchevents(inputy).subscribe((data) =>{ console.log(data.items);this.hjh=data.items});
}
  
  onselect(videoidfp)
  {
    let bb_id:string=videoidfp.id.videoId;
    // this.router.navigate('/videoplayingn',id);
    
    
    this.router.navigate(['']).then(()=>{this.router.navigateByUrl(`videoplayingn/${bb_id}`)});
  }

  add2favorite(videoidff)
  { 
    this.dtemp.addfav(videoidff).subscribe((data) =>{ console.log("donebro");});
  }
  gotofavorites(item1)
  {
    this.router.navigate(['']).then(()=>{this.router.navigateByUrl(`favoritesn`,)});
    this.gettfavorites();
  }
  
  gettfavorites()
  {
    this.temp.finalgetfav().subscribe((data) =>{ console.log(data);this.boy.greatcar=data});//correct here
  }
}
