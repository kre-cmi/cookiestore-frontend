import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {CookieComponent} from './cookie/cookie.component';
import {GrandmaComponent} from './grandma/grandma.component';
import {IngredientsComponent} from './ingredients/ingredients.component';
import {RouterModule} from '@angular/router';

const appRoutes = [
  { path: 'cookie', component: CookieComponent },
  { path: 'grandma', component: GrandmaComponent },
  { path: 'ingredients', component: IngredientsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CookieComponent,
    GrandmaComponent,
    IngredientsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, useHash: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
