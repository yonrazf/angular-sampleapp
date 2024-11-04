import { Component } from '@angular/core';
import { FronteggAppService } from '@frontegg/angular';

@Component({
  selector: 'app-show-admin-portal',
  templateUrl: './show-admin-portal.component.html',
  styleUrls: ['./show-admin-portal.component.css'],
})
export class ShowAdminPortalComponent {
  constructor(private fronteggAppService: FronteggAppService) {}

  showAdminPortal(): void {
    this.fronteggAppService.showAdminPortal();
  }
}
