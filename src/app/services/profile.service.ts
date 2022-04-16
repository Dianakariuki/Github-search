import { Injectable } from '@angular/core';
import{HttpClient } from  '@angular/common/http';

import { map } from 'rxjs/internal/operators/map';


@Injectable()

export class ProfileService {

  private username:string;
 
  private token= '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';

  constructor( private http:HttpClient) { 
    console.log("service is now ready!");
    this.username = 'Dianakariuki';

  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/").pipe(map((_data: any) => {})) + this.username + "&token=" + this.token;

    
  }
}
