import { Component, OnInit } from '@angular/core';
import {LinkService} from '../link.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-link-viewer',
  templateUrl: './link-viewer.component.html',
  styleUrls: ['./link-viewer.component.css']
})
export class LinkViewerComponent implements OnInit {

  link: any;

  constructor(
    private _linkService: LinkService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    const linkIndex = +this.route.snapshot.paramMap.get('linkIndex');
    this.link = this._linkService.getlinks()[linkIndex];
  }

}
