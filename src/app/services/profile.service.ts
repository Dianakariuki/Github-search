import { Injectable, InjectionToken } from '@angular/core';
import{HttpClient } from  '@angular/common/http';

import { map } from 'rxjs/internal/operators/map';


@Injectable()

export class ProfileService {

  private username:string;
  private clientid = '397bb5ee06176f96cc63';
    private clientsecret = '397bb5ee06176f96cc63';

  constructor( private http:HttpClient) { 
    console.log("service is now ready!");
    this.username = 'Dianakariuki';
   
  
  }
  
    getProfileInfo(){
      return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret).pipe(map((_data: any) => {})) ;
    

    
  }
}