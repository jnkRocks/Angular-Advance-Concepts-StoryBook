import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports-man',
  templateUrl: './sports-man.component.html',
  styleUrls: ['./sports-man.component.scss']
})
export class SportsManComponent implements OnInit {

  constructor() { }
  @Input() data: any;

  ngOnInit(): void {
  }

}
