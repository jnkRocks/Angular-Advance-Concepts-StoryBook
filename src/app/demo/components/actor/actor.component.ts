import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {

  constructor() { }
  @Input() data: any;
  
  ngOnInit(): void {
  }

}
