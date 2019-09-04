import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { post } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class DatafetchService {
  public greatcar=[];
  public idid=50;

  private url:string= "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDR9NyQQ18mPM0TQ7gkTqVS2qjNjjjwHq4&channelId=UCq-Fj5jknLsUf-MWSy4_brA&part=snippet&order=date&maxResults=20";
  constructor(private ht:HttpClient,private ttt:HttpClient) { }

  getad():Observable<any>
  {
    return this.ht.get<any>(this.url);
  }
  
  searchevents(inputtt):Observable<any>
  {
      return this.ht.get<any>("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+inputtt+"&key=AIzaSyDR9NyQQ18mPM0TQ7gkTqVS2qjNjjjwHq4");

  }

  addfav(videopp):Observable<any>
  { 
    return this.ttt.post<any>("http://localhost:3000/night",videopp.snippet);//("http://localhost:3000/favoritelist");
  }
 
finalgetfav()
{
  return this.ttt.get<any>("http://localhost:3000/night");
}

  deleteservice(itemm)
  {
    return this.ttt.delete("http://localhost:3000/night/"+itemm);
  }

 /* getcmnt()
  {
    return this.ttt.get<any>("http://localhost:3001/stark");
  }
  pAddComment(id,val){
    return this.ttt.patch("http://localhost:3001/starks"+id,{"comments":val});
  }
 oAddComment(itemf)
 {
  return this.ttt.post<any>("http://localhost:3001/stark",itemf);
 }*/
 
 
 
 adddcommentservice(objk,cmnti)
 {
  return this.ttt.patch("http://localhost:3000/night/"+objk.id,{"comment":cmnti});
 }
 
 getmcomment()
 {
  return this.ttt.get<any>("http://localhost:3001/stark");
 }
}
