import { AfterContentInit, AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
  
  title = 'AngularConceptsStoryBook';

 

  ngAfterViewChecked(): void {
    var localWindow: any = window;
    const pr = localWindow['PR'];
    pr.prettyPrint()
  }
 
  ngOnInit(): void {
    
  }
}
