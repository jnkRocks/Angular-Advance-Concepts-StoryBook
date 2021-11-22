import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  constructor() { }
  isSideBarCollapsed  = false;

  wrapperList = [
    {name: 'DI', href: '/demo/dependency-injection'},
    {name: 'Use Class', href: '/demo/use-class'},
    {name: 'Use Factory', href: '/demo/use-factory'},
    {name: 'InJection token', href: '/demo/use-factory'}, 
    {name: 'Dynamic Component Loading', href: '/demo/use-factory'},
    {name: 'Host Binding', href: '/demo/use-factory'},
    {name: 'Subject Service', href: '/demo/use-factory'},
    {name: 'Ng Template Outlet', href: '/demo/use-factory'}



  ]
  ngOnInit(): void {
  }

  toggleSideBar(){
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
  }

}
