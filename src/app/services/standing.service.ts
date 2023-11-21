import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StandingResponse } from '../models/standing';

interface Country {
  leagueId: number;
  countryName: string;
}

@Injectable({
  providedIn: 'root',
})
export class StandingService {
  private readonly API_URL: string = 'https://v3.football.api-sports.io/standings';
  selectedCountry: Country = null;

  constructor(private http: HttpClient) {}

  getCurrentStandingsByLeagueId(
    leagueId: number,
    season: number
  ): Observable<StandingResponse> {
    const headers = new HttpHeaders().set(
      'x-rapidapi-key',
      '50288d7946038423e11b6798de801f11'
    );
    return this.http.get<StandingResponse>(
      `${this.API_URL}?league=${leagueId}&season=${season}`,
      { headers }
    );
  }
}
