import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  username : string;
  userprofiles : any;

  constructor(public findprofile : ServiceService) {

  }
  addUser(){
    this.finduserprofile.updateuserprofile(this.username);
    this.finduserprofile.getprofile();
    this.userprofiles = this.finduserprofile.userprofiles
    console.log(this.userprofiles)
  }

  ngOnInit(): void {
  }

}
