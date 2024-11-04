import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAdminPortalComponent } from './show-admin-portal.component';

describe('ShowAdminPortalComponent', () => {
  let component: ShowAdminPortalComponent;
  let fixture: ComponentFixture<ShowAdminPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowAdminPortalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAdminPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
