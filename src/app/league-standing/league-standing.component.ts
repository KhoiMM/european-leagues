import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Standing } from '../models/standing';
import { StandingService } from '../services/standing.service';

interface Country {
  leagueId: number;
  countryName: string;
}

@Component({
  selector: 'app-league-standing',
  templateUrl: './league-standing.component.html',
  styleUrls: ['./league-standing.component.scss'],
})
export class LeagueStandingComponent implements OnInit, OnDestroy {
  standings: Standing[] = [];
  isLoading: boolean = true;
  subscription = Subscription.EMPTY;

  readonly countries: Country[] = [
    {
      leagueId: 39,
      countryName: 'England',
    },
    {
      leagueId: 140,
      countryName: 'Spain',
    },
    {
      leagueId: 78,
      countryName: 'Germany',
    },
    {
      leagueId: 61,
      countryName: 'France',
    },
    {
      leagueId: 135,
      countryName: 'Italy',
    },
  ];

  constructor(private standingService: StandingService) {}

  ngOnInit(): void {
    if (!this.standingService.selectedCountry) {
      this.standingService.selectedCountry = this.countries[0];
    }
    this.getCurrentStandingsByLeague();
  }

  getCurrentStandingsByLeague() {
    this.standingService
      .getCurrentStandingsByLeagueId(
        this.standingService.selectedCountry.leagueId,
        new Date().getFullYear()
      )
      .subscribe((res) => {
        this.standings = res.response[0].league.standings[0];
        this.isLoading = false;
      });
  }

  changeCountry(selectedCountry: Country) {
    if (this.standingService.selectedCountry.leagueId !== selectedCountry.leagueId) {
      this.isLoading = true;
      this.standingService.selectedCountry = selectedCountry;
      this.getCurrentStandingsByLeague();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
