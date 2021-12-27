import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-factory',
  templateUrl: './use-factory.component.html',
  styleUrls: ['./use-factory.component.scss']
})
export class UseFactoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 info = `Use Factory is a function used to return value based on conditions, we can pass values to it using the deps parameter. 
    We will see an example where we will create a service and pass a value to its constructor.`;

  js = ` 
  // Service A code
  constructor(
    private logger: Logger,
    private isAuthorized: boolean) { }

    // This service has logger and authorized property which we will inject from our factory.
    
    // factory
    const serviceAFactory = (logger: Logger, userService: UserService) => {
      return new HeroService(logger, userService.user.isAuthorized);
    };

    // We can create and export factory which can be imported anywhere needed

    export let heroServiceProvider =
    { provide: HeroService,
      useFactory: heroServiceFactory,
      deps: [Logger, UserService]
    };

    // To use it in a particular call we can call it like below:
    Component({
      selector: 'app-heroes',
      providers: [ heroServiceProvider ],
      template:  ''
    })
  `;

}
