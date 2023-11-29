import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Member } from './../../_models/member';
import { MemberService } from 'src/app/_services/members.service';
import { MemberCardComponent } from './../member-card/member-card.component';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [CommonModule, MemberCardComponent],
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss'],
})
export class MemberListComponent {
  members: Member[] | undefined;

  constructor(private memberService: MemberService) {}

  ngOnInit() {
    this.loadMembers();
  }

  loadMembers() {
    this.memberService.getMembers().subscribe({
      next: (members) => (this.members = members),
    });
  }
}
