import { Component, OnInit } from '@angular/core';
import { NewService } from '../../services/new-service.service';
import { OldService } from '../../services/old-service.service';

@Component({
  selector: 'app-use-existing',
  templateUrl: './use-existing.component.html',
  styleUrls: ['./use-existing.component.scss']
})
export class UseExistingComponent implements OnInit {

  
  constructor(private oldService: OldService,
    private newService: NewService) { }
    
  ngOnInit(): void {
  }
  info = `Use Existing provider can be used to specify an existing entity to be used for a service. In this example we have created 2 service old and new and we will be configuring the providers in such a way that in the console 
  You will notice both logs "Old Service" value.`;

  js = `@NgModule({
    ..
    providers: [
      { provide: NewService, useExisting: OldService }
    ],
    ..
  })`;
}
