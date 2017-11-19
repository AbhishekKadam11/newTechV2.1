import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';

@Injectable()
export class StateService {

  protected layouts: any = [
    {
      name: 'One Column',
      icon: 'nb-layout-default',
      id: 'one-column',
      selected: true,
    },
    {
      name: 'Two Column',
      icon: 'nb-layout-two-column',
      id: 'two-column',
    },
    {
      name: 'Center Column',
      icon: 'nb-layout-centre',
      id: 'center-column',
    },
  ];

  public sidebars: any = [
    {
      name: 'Left Sidebar',
      icon: 'nb-layout-sidebar-left',
      id: 'left',
    },
    {
      name: 'Right Sidebar',
      icon: 'nb-layout-sidebar-right',
      id: 'right',
    },
    {
      name: 'Left Sidebar',
      icon: 'nb-layout-sidebar-left',
      state: 'collapsed',
      id: 'left',
      selected: true,
    },
  ];

  protected layoutState$ = new BehaviorSubject(this.layouts[0]);
  public sidebarState$ = new BehaviorSubject(this.sidebars[2]);

  setLayoutState(state: any): any {
    this.layoutState$.next(state);
  }

  getLayoutStates(): Observable<any[]> {
    return Observable.of(this.layouts);
  }

  onLayoutState(): Observable<any> {
    return this.layoutState$.asObservable();
  }

  setSidebarState(state: any): any {
    this.sidebarState$.next(state);
  }

  getSidebarStates(): Observable<any[]> {
    return Observable.of(this.sidebars);
  }

  onSidebarState(): Observable<any> {
    return this.sidebarState$.asObservable();
  }
}
