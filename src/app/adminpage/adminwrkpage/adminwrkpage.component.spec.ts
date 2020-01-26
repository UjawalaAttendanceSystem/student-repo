import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminwrkpageComponent } from './adminwrkpage.component';

describe('AdminwrkpageComponent', () => {
  let component: AdminwrkpageComponent;
  let fixture: ComponentFixture<AdminwrkpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminwrkpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminwrkpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
