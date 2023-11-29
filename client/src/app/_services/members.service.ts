import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  baseUrl = environment.apiUrl;
  users: Member[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getMembers() {
    let url = this.baseUrl + 'users/';
    return this.http.get<Member[]>(url);
  }

  getMember(username: string) {
    let url = this.baseUrl + 'users/' + username;
    return this.http.get<Member>(url);
  }
}
