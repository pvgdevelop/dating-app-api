import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Member } from 'src/app/_models/member';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
})
export class MemberCardComponent {
  @Input() member: Member | undefined;
}
