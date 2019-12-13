import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { PageScrollService, PageScrollInstance } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('homeContainer',{static: false}) homepage;
  pageScrollInstance: PageScrollInstance;
  constructor(private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any,
              private route:ActivatedRoute) { }

  ngOnInit() {
   
  }
  ngAfterViewInit(){
    // console.log(this.homepage)
    this.route.fragment.subscribe((fragment: string) => {
      if(fragment=="contacts"){
        this.scrollToElement('.theEnd', 1500)
        this.scrollIt()
      }else if(fragment==undefined){
        // console.log(undefined)
        this.scrollToElement('.toTop', 1)
        this.scrollIt()
      }
  })
    // setTimeout(() => {
    // }, 1200);
  }
  scrollToElement(element, duration): void {
    // console.log($element);
    this.pageScrollInstance =this.pageScrollService.create({
      document: this.document,
      scrollTarget: element,
      // scrollTarget: '#contacts',
      scrollViews: [this.homepage.nativeElement],
      duration: duration
    });

  }
      scrollIt() {
        // console.log("called")
        this.pageScrollService.start(this.pageScrollInstance);
      }

      // scroll(){
      //   console.log(this.homepage)
      //   // this.scrollToElement()
      //   // this.homepage.nativeElement.scrollTo(2567)
      //   // window.scrollTo(2567, 0);
      //   try {
      //     this.homepage.nativeElement.scrollTop = this.homepage.nativeElement.scrollHeight;
      //   } catch(err) {console.log(err) }     
      //   console.log(this.homepage)
      // }
}
