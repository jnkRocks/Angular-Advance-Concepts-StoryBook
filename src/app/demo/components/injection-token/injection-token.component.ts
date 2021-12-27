import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-injection-token',
  templateUrl: './injection-token.component.html',
  styleUrls: ['./injection-token.component.scss']
})
export class InjectionTokenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  info = `Injection token class are used to create unique tokens and are used to inject objects , string etc`;
   

  js = `
    export const API_URL= new InjectionToken<string>(''); 
    providers: [ 
      { provide: API_URL, useValue: 'http://SomeEndPoint.com/api' }
    ]

    // To inject it in any component use below code using @inject
        
    constructor(@Inject(API_URL) private apiURL: string) { 
    }
  `;
}
