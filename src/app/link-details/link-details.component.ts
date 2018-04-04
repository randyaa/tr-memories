import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-link-details',
  templateUrl: './link-details.component.html',
  styleUrls: ['./link-details.component.css']
})
export class LinkDetailsComponent implements OnInit {

  href = '';

  @Input()
  link: any;

  @Input()
  list: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.href = window.location.href;
    //this.router.url;
  }

}
