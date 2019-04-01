import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OauthInitComponent } from './oauth-init.component';

describe('OauthInitComponent', () => {
  let component: OauthInitComponent;
  let fixture: ComponentFixture<OauthInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OauthInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OauthInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
