import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { YogaForBeginnersComponent } from './yoga-for-beginners/yoga-for-beginners.component';
import { VideosComponent } from './videos/videos.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { RetreatComponent } from './retreat/retreat.component';

const routerOptions: ExtraOptions = {
  useHash: false,
  // useHash:true,
  anchorScrolling: 'enabled', 
  scrollPositionRestoration: 'enabled',
  onSameUrlNavigation: "reload",
  // enableTracing: true,
  // ...any other options you'd like to use
};
 
const routes: Routes = [{ path: '',redirectTo: '/about',pathMatch: 'full'},
                        { path: 'yogaForBeginners', component: YogaForBeginnersComponent },
                        { path: 'workshop', component: WorkshopComponent },
                        { path: 'retreat', component: RetreatComponent },
                        { path: 'videos', component: VideosComponent },
                        { path: 'contact', component: ContactComponent },
                        { path: 'about', component: HomeComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
