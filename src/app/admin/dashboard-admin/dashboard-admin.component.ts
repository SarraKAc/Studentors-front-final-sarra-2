import { tokenName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CrudService } from 'src/app/services/crud.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit { 

  constructor(
    private token:TokenStorageService,
    private crud:CrudService
  ) { }

  userStorage = this.token.getUser() 

  users:User[] = []

  onDelete(id:string | undefined ){
    this.crud.deleteUserfromRoot(id)
    .subscribe();

    window.location.reload();
  }


  ngOnInit(): void {

    this.crud.getAllUsers()
    .subscribe( data => {this.users = data;});

    
  }

}
