import { Component, OnInit } from '@angular/core';
import {LinkService} from '../link.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  cards;

  constructor(private _linkService: LinkService) { }

  ngOnInit() {
    this.cards = this._linkService.getlinks();
  }

}
