import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YogaForBeginnersComponent } from './yoga-for-beginners/yoga-for-beginners.component';
import { VideosComponent } from './videos/videos.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{ path: '',redirectTo: '/about',pathMatch: 'full'},
                        { path: 'yogaForBeginners', component: YogaForBeginnersComponent },
                        { path: 'videos', component: VideosComponent },
                        { path: 'contact', component: ContactComponent },
                        { path: 'about', component: HomeComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
