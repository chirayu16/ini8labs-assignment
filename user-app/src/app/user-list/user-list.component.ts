import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { UserService, User } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    })
  }
}
