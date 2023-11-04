import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService) {}

  ngOnInit(): void {}

  login() {
    console.log({ model: this.model });
    this.accountService.login(this.model).subscribe({
      next: (response) => {
        console.log({ response });
      },
      error: (error) => {
        console.log({ error });
      },
    });
  }

  logout() {
    this.accountService.logout();
  }
}
