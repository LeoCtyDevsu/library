import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user: UserModel = {};

  constructor(private _userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this._userService.getUser();
  }
}
