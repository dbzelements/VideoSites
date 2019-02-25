import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedComponent } from './grouped.component';

describe('GroupedComponent', () => {
  let component: GroupedComponent;
  let fixture: ComponentFixture<GroupedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
