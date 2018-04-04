import { Component, OnInit } from '@angular/core';
import {LinkService} from '../link.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactLink;

  constructor(private _linksService: LinkService) { }

  ngOnInit() {
    const allLinks = this._linksService.getlinks();
    this.contactLink = allLinks[allLinks.length - 1];
  }

}
