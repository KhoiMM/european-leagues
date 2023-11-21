import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Standing } from '../../models/standing';
import { StandingService } from '../../services/standing.service';

interface Country {
  leagueId: number;
  countryName: string;
}

@Component({
  selector: 'app-league-standing',
  templateUrl: './league-standing.component.html',
  styleUrls: ['./league-standing.component.scss'],
})
export class LeagueStandingComponent implements OnInit {
  standings: Standing[] = [];
  isLoading: boolean = false;

  readonly countries: Country[] = [
    {
      leagueId: 39,
      countryName: 'england',
    },
    {
      leagueId: 140,
      countryName: 'spain',
    },
    {
      leagueId: 78,
      countryName: 'germany',
    },
    {
      leagueId: 61,
      countryName: 'france',
    },
    {
      leagueId: 135,
      countryName: 'italy',
    },
  ];

  constructor(private standingService: StandingService) {}

  ngOnInit(): void {
    if (!sessionStorage.getItem('leagueId')) {
      sessionStorage.setItem('leagueId', this.countries[0].leagueId.toString());
    }
    this.getCurrentStandingsByLeague();
  }

  getCurrentStandingsByLeague(): void {
    this.isLoading = true;
    this.standingService
      .getCurrentStandingsByLeagueId(
        Number(sessionStorage.getItem('leagueId')),
        new Date().getFullYear()
      )
      .pipe(take(1))
      .subscribe((res) => {
        this.standings = res.response[0].league.standings[0];
        this.isLoading = false;
      });
  }

  changeCountry(selectedCountry: Country): void {
    if (
      Number(sessionStorage.getItem('leagueId')) !== selectedCountry.leagueId
    ) {
      sessionStorage.setItem('leagueId', selectedCountry.leagueId.toString());
      this.getCurrentStandingsByLeague();
    }
  }
}
