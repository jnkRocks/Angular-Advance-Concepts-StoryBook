import { Component, OnInit } from '@angular/core';
import { NewService } from '../../services/new-service.service';
import { OldService } from '../../services/old-service.service';

@Component({
  selector: 'app-use-class',
  templateUrl: './use-class.component.html',
  styleUrls: ['./use-class.component.scss']
})
export class UseClassComponent implements OnInit {

  constructor(private oldService: OldService,
    private newService: NewService) { }

  ngOnInit(): void {
    console.log(`Value from Old Service, i.e this.oldService.text: ${this.oldService.text}`);
    console.log(`Value from New Service, i.e this.newService.text: ${this.newService.text}`);
    //   Console will print following values:
    //   Value from Old Service, i.e this.oldService.text: old service
    //   Value from New Service, i.e this.newService.text: old service
  }


}
