import { Component, OnInit } from '@angular/core';
import {Repo} from '../repo'
import {ReposEnquiryService} from '../repos-probe.service';
import {ServicesService} from '../userprofile/service.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repos : Repo;
  username : string;

  constructor(public repos_get : ReposProbeService, public user : ServiceService) {
  }
  showRepos(){
    this.repos_get.updateuserprofile(this.username)
    this.repos_get.getrepos();
    this.repos=this.repos_get.repos
 }
  ngOnInit(): void {
  }

}
