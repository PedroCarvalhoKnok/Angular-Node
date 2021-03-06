import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ListComponent } from './pages/list/list.component';
import { RegisterComponent } from './pages/register/register.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api-service';
import { Router } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    Router,
    MatDialogModule,
    MatSnackBarModule,

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
