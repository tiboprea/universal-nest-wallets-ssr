import { Component, OnInit } from '@angular/core';
import { AppStore } from './app.store';

@Component({
  selector: 'app-root',
  template: `
    <app-navigation></app-navigation>
    <div id="container">
      <h1>NestJS + Angular Universal</h1>

      <div id="navigation">
        <a routerLink="/">Home</a>
        <a routerLink="/speakers">Speakers</a>
      </div>
      <div id="outlet-wrapper">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [
    `
      #navigation {
        margin: 20px 0;
        font-weight: bold;
        font-size: 18px;
      }
      #navigation a {
        color: #5279a4;
        margin-right: 20px;
      }
      #outlet-wrapper {
        padding: 20px;
        border: 1px #ccc solid;
      }
    `
  ],
  viewProviders: [AppStore],
})
export class AppComponent implements OnInit {
  constructor(private readonly _appStore: AppStore) {}

  ngOnInit(): void {
    this._appStore.notifyError();
  }
}
