import { Injectable, InjectionToken } from '@angular/core';
import{HttpClient } from  '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/internal/operators/map';


@Injectable()

export class ProfileService {

  private username:string;
  

  constructor( private http:HttpClient) { 
    console.log("service is now ready!");
    this.username = 'Dianakariuki';
   
  }
  getProfileInfo(){
    return this.http.get('https://api.github.com/users/' + this.username )
    
  }
 
  getProfileRepos(){
  	return this.http.get("https://api.github.com/users/repos?" + this.username)
  }
  updateProfile(username: string) {
          this.username = username;
      
    }
  

   
  //   getProfileInfo(){
  //     interface ApiResponse {
  //       login: string;
  //     }
    
  //     return this.http.get('https://api.github.com/users/' + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  //     .pipe(map((_data: any) => {})) ;
  //   }
  //     updateProfile(username: string) {
  //       this.username = username;
    
  // }
}