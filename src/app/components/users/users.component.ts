import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  all_users: User[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.all_users = this.dataService.getAllUsers();
  }
}
