import { Component, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'DoxiYoga';
  opened=false

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => {changeDetectorRef.detectChanges(); this.opened=false};
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(){
   console.log( this.mobileQuery)
    // const isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
