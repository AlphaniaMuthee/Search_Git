import { Component, OnInit } from '@angular/core';
import {ServiceService} from './service.service';
import {ReposProbeService} from '../repos-probe.service'
import {User} from '../user'

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  username : string;
  userprofiles : any;

  constructor(public finduserprofile : ServiceService) {

  }
  addUser(){
    this.finduserprofile.updateuserprofile(this.username);
    this.finduserprofile.getuserprofile();
    this.userprofiles = this.finduserprofile.userprofiles
    console.log(this.userprofiles)
  }

  ngOnInit(): void {
  }

}
