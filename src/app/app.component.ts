// Available from v4.20.1 for automatic redirect to your app / login box.

import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ContextHolder,
  FronteggAppService,
  FronteggAuthService,
} from '@frontegg/angular';
import { Subscription } from 'rxjs';
import { ShowAdminPortalComponent } from './show-admin-portal/show-admin-portal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  isLoading = true;
  loadingSubscription: Subscription;
  user?: any;

  constructor(
    private fronteggAuthService: FronteggAuthService,
    private fronteggAppService: FronteggAppService
  ) {
    this.loadingSubscription = fronteggAppService.isLoading$.subscribe(
      (isLoading) => (this.isLoading = isLoading)
    );
  }

  ngOnInit(): void {
    this.fronteggAuthService?.user$.subscribe((user) => {
      this.user = user;
    });
  }

  logIn(): void {
    window.location.href = '/account/login';
  }

  logOut(): void {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `/account/logout`;
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }
}
