import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatafetchService {

  private url:string= "https://www.googleapis.com/youtube/v3/search?key=&channelId=UCq-Fj5jknLsUf-MWSy4_brA&part=snippet&order=date&maxResults=20";
  constructor(private ht:HttpClient) { }

  getad():Observable<any>
  {
    return this.ht.get<any>(this.url);
  }
  
  searchevents(inputtt):Observable<any>
  {
      return this.ht.get<any>("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+inputtt+"&key=");

  }
 
}
