import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { SnackbarCompComponent } from './snackbar-comp/snackbar-comp.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatLabelModule } from '@angular/material/label';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SnackbarService } from './services/snackbar.service';
import { AddToCartService } from './services/add-to-cart.service';

@NgModule({
  declarations: [
    AppComponent,
    SnackbarCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatBadgeModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    // MatLabelModule
    FormsModule,
    MatInputModule 
  ],
  providers: [SnackbarService,AddToCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
