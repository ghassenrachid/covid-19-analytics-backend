import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WorldwideComponent } from './worldwide/worldwide.component';
import { GlobalInfoComponent } from './global-info/global-info.component';
import { AddGlobalInfoComponent} from './add-global-info/add-global-info.component';
import { ConfirmedCaseComponent} from './confirmedCase/confirmed-case.component';


import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    WorldwideComponent,
    GlobalInfoComponent,
    AddGlobalInfoComponent,
    ConfirmedCaseComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  entryComponents: [AddGlobalInfoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
