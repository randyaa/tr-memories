import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinksComponent } from './links/links.component';
import {LinkViewerComponent} from './link-viewer/link-viewer.component';
import {AstleyComponent} from './astley/astley.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  { path: '', component: LinksComponent, pathMatch: 'full' },
  { path: 'details/:linkIndex', component: LinkViewerComponent },
  { path: 'rick', component: AstleyComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
