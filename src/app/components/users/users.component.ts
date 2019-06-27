import { Component, OnInit } from '@angular/core';
import { RootService } from 'src/app/services/root.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: any = null;
  public history: any = null;
  public usersTable: string[] =
    ['id', 'username', 'email', 'userRole', 'edit'];
  public historyTable: string[] = 
    ['username', 'roleTitle', 'allocatedAt', 'removedAt'];

  selectedUser: User;
  userPanel = false;
  historyPanel = false;

  constructor(private rootService: RootService) {
     this.getAllUsers();
    }

  ngOnInit() {
    this.userPanel = true;
  }

  getAllUsers() {
      this.rootService.getAllUsers().subscribe(u => {
        this.users = u;
        console.log(u);
      });
  }

  showHistory(x: number) {
    this.userPanel = false;
    this.historyPanel = true;
    this.rootService
        .getAllHistory(x)
        .subscribe(d => {
          this.history = d;
          console.log(d);
        });
  }

  cancelHistory() {
    this.userPanel = true;
    this.historyPanel = false;
    this.selectedUser = null;
  }
}
