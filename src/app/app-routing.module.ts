import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './page/contact/contact.component';
import { RecommendComponent } from './page/home/recommend/recommend.component';
import { KnowladgeComponent } from './page/home/knowladge/knowladge.component';
import { ZeroWasteComponent } from './page/home/zero-waste/zero-waste.component';
import { ProfileComponent } from './page/home/profile/profile.component';
import { RankingComponent } from './page/home/ranking/ranking.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'recommend', component: RecommendComponent },
  { path: 'knowladge', component: KnowladgeComponent },
  { path: 'zero-waste', component: ZeroWasteComponent},
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component:ProfileComponent },
  { path: 'ranking', component:RankingComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
