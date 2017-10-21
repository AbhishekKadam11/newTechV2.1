import { Component, Input, OnInit, EventEmitter } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
// import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { Router } from '@angular/router';

import {UserService} from '../../../pages/login/user.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position: string = 'normal';

  user: any;
  public logged:boolean = false;
  public profileName:string;
  public userId:string;
  hidebttn:boolean = false;
  menuClick: EventEmitter<NbMenuService>;

  userMenu = [{ title: 'Profile', item: 'profile'  }, { title: 'Log out' , item: 'logout' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private analyticsService: AnalyticsService,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    // this.userService.getUsers()
    //   .subscribe((users: any) => this.user = users.nick);
    if (this.userService.profileName) {
      this.logged = this.userService.loggedIn;
      this.profileName = this.userService.profileName;
      this.userId = this.userService.userId;
      this.hidebttn = true;
    }
  }

  onMenuClick($event) {
    if ($event.item === 'profile') {
      this.router.navigate(['/pages/profile']);
    }
    if ($event.item === 'logout') {
      this.userService.logout();
      this.hidebttn = false;
    }
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

}
