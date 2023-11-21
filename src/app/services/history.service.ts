import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoryResponse } from '../models/history';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private readonly API_URL: string = 'https://v3.football.api-sports.io/fixtures';

  constructor(private http: HttpClient) {}

  getHistory(teamId: number, last: number): Observable<HistoryResponse> {
    const headers = new HttpHeaders().set(
      'x-rapidapi-key',
      '50288d7946038423e11b6798de801f11'
    );
    return this.http.get<HistoryResponse>(
      `${this.API_URL}?team=${teamId}&last=${last}`,
      { headers }
    );
  }
}
