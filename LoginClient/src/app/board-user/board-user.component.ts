import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css'] 
})
export class BoardUserComponent implements OnInit {
  content: string = ''; 
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe({
      next: (data: any) => {
        this.content = data.message; 
      },
      error: (err: any) => {
        console.log(err);
        if (err.error) {
          this.content = err.error.message; 
        } else {
          this.content = "Error with status: " + err.status; 
        }
      }
    });
  }
}