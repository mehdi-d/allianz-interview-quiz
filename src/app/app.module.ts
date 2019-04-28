// Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// Component
import { AppComponent } from './app.component';
import { StepperComponent } from './basic/stepper/stepper.component';
import { ButtonComponent } from './basic/button/button.component';
import { DialogComponent } from './basic/dialog/dialog.component';
import { TermComponent } from './pages/term/term.component';
import { PersonalInfoComponent } from './pages/personal-info/personal-info.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    ButtonComponent,
    DialogComponent,
    TermComponent,
    PersonalInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
