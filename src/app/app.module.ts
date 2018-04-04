import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule} from '@angular/material';
import { LinksComponent } from './links/links.component';
import {AppRoutingModule} from './app-routing.module';
import { LinkDetailsComponent } from './link-details/link-details.component';
import { LinkViewerComponent } from './link-viewer/link-viewer.component';
import { LinkService } from './link.service';
import { AstleyComponent } from './astley/astley.component';
import { ContactComponent } from './contact/contact.component';
import {QRCodeModule} from 'angularx-qrcode';


@NgModule({
  declarations: [
    AppComponent,
    LinksComponent,
    LinkDetailsComponent,
    LinkViewerComponent,
    AstleyComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,

    AppRoutingModule,

    QRCodeModule,
  ],
  providers: [LinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
