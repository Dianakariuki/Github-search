import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any[]=[];


  constructor(private profileServices:ProfileService) { 
    
  }

  ngOnInit(): void {
    this.profileServices.getProfileInfo()
    subscribe:((profile: any) =>{
      console.log(profile)
      this.profile = profile.data
    });
  }

}
