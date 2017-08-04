import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { APIService} from './service/api.service';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
// import { UserComponent } from './user/user.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { BrandComponent } from './brand/brand.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventMasterComponent } from './event-master/event-master.component';

@NgModule({
  declarations: [
    AppComponent,
    // UserComponent,
    // LoginComponent,
    // RegisterComponent,
    // BrandComponent,
    EventListComponent,
    EventMasterComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot([
      {path: '', component: EventListComponent},
      {path: 'master', component: EventMasterComponent}
    ])

  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
