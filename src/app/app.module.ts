import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileService } from './services/profile.service';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { HighlightDirective } from './highlight.directive';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UserComponent,
    HighlightDirective,
    SearchPipe,
     
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],

  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
