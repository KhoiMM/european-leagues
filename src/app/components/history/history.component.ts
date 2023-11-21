import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Match } from '../../models/history';
import { HistoryService } from '../../services/history.service';
import { Subscription, take } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  matches: Match[] = [];
  isLoading: boolean = true;

  constructor(
    private historyService: HistoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.get10LastMatches(Number(params['teamId']));
    });
  }

  get10LastMatches(teamId: number): void {
    this.historyService.getHistory(teamId, 10).pipe(take(1)).subscribe((res) => {
      this.matches = res.response;
      this.isLoading = false;
    });
  }
}
