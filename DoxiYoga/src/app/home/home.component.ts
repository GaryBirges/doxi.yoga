import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { PageScrollService, PageScrollInstance } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('homepage',{static: false}) homepage;
  pageScrollInstance: PageScrollInstance;
  constructor(private pageScrollService: PageScrollService,@Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
   
  }
  ngAfterViewInit(){
    // console.log(this.homepage)
    this.scrollToElement('v')
    // setTimeout(() => {
      this.scrollIt()
    // }, 1200);
  }
  scrollToElement($element): void {
    // console.log($element);
    this.pageScrollInstance =this.pageScrollService.create({
      document: this.document,
      // scrollTarget: '.theEnd',
      scrollTarget: '#contacts',
      scrollViews: [this.homepage.nativeElement],
      
    });

  }
      scrollIt() {
        console.log("called")
        this.pageScrollService.start(this.pageScrollInstance);
      }
}
