import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueStandingComponent } from './league-standing.component';

describe('LeagueStandingComponent', () => {
  let component: LeagueStandingComponent;
  let fixture: ComponentFixture<LeagueStandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueStandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeagueStandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
