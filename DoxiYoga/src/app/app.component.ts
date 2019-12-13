import { Component, ChangeDetectorRef, OnDestroy, OnInit, AfterViewInit, Inject, ViewChild, ElementRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router, ActivatedRoute } from '@angular/router';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit, AfterViewInit {
  title = 'DoxiYoga';
  opened=false

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  fragment: string;

  

  constructor(changeDetectorRef: ChangeDetectorRef, 
              media: MediaMatcher,
              // private router: Router,
              // private route: ActivatedRoute
              
              ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => {changeDetectorRef.detectChanges(); this.opened=false};
    this.mobileQuery.addListener(this._mobileQueryListener);
    
  }
  ngOnInit(){
   console.log( this.mobileQuery)
  //  this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    // const isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
  }
  ngAfterViewInit(): void {
    // try {
    //   console.log(this.fragment)
    //   document.querySelector('#' + this.fragment).scrollIntoView();
    // } catch (e) { }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  // goTo(location){
  //   console.log(location)
  //   // console.log(window.location)
  //   // window.location.hash = ''; window.location.hash = location;
  //   // window.location.href="http://localhost:4200/about#contacts"
  //   // this.router.navigate(['/about'], {fragment: 'contacts'});
  // } 


    // $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  
}
 