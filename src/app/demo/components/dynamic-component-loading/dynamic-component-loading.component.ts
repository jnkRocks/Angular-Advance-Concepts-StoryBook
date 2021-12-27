import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AdComponent } from '../../interface/ad-component';
import { AdItem } from '../../models/ad-item';
import { ActorComponent } from '../actor/actor.component';
import { SportsManComponent } from '../sports-man/sports-man.component';

@Component({
  selector: 'app-dynamic-component-loading',
  templateUrl: './dynamic-component-loading.component.html',
  styleUrls: ['./dynamic-component-loading.component.scss']
})
export class DynamicComponentLoadingComponent implements OnInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ads: AdItem[] | undefined;
  @ViewChild("vc", { read: ViewContainerRef, static: true }) vc: ViewContainerRef | undefined;
  currentAdIndex = 0;
  tabId = 1;
  ngOnInit(): void {
    this.ads = this.getAds();
    this.loadComponent();
    setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

  getAds() {
    return [
      new AdItem(ActorComponent, { name: 'Tom Cruise', bio: 'Action and Romantic guy' }),

      new AdItem(SportsManComponent, { headline: 'Sachin Tendulkar', body: 'Best Cricketer' }),

      new AdItem(ActorComponent, {
        name: 'Amitabh Bachchan',
        bio: 'Best Indian Actor'
      }),

      new AdItem(SportsManComponent, {
        headline: 'Pele',
        body: 'Best Footballer'
      }),
    ];
  }

  loadComponent() {
    if (this.ads && this.ads.length > 0 && this.vc) {
      this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
      const adItem = this.ads[this.currentAdIndex];

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        adItem.component
      );

      this.vc.clear();
      const componentRef1 = this.vc.createComponent<AdComponent>(
        componentFactory
      );
      componentRef1.instance.data = adItem.data;
    }
  }

  html = `
  <div class="ad-banner-example">
      <ng-container #vc></ng-container>
  </div>
  
   `;

  js = `
   import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
    import { AdComponent } from '../../interface/ad-component';
    import { AdItem } from '../../models/ad-item';
    import { ActorComponent } from '../actor/actor.component';
    import { SportsManComponent } from '../sports-man/sports-man.component';

    @Component({
      selector: 'app-dynamic-component-loading',
      templateUrl: './dynamic-component-loading.component.html',
      styleUrls: ['./dynamic-component-loading.component.scss']
    })
    export class DynamicComponentLoadingComponent implements OnInit {

      constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

      ads: AdItem[] | undefined;
      @ViewChild("vc", { read: ViewContainerRef, static: true }) vc: ViewContainerRef | undefined;
      currentAdIndex = 0;

      ngOnInit(): void {
        this.ads = this.getAds();
        this.loadComponent();
        setInterval(() => {
          this.loadComponent();
        }, 3000);
      }

      getAds() {
        return [
          new AdItem(ActorComponent, { name: 'Tom Cruise', bio: 'Action and Romantic guy' }),

          new AdItem(SportsManComponent, { headline: 'Sachin Tendulkar', body: 'Best Cricketer' }),

          new AdItem(ActorComponent, {
            name: 'Amitabh Bachchan',
            bio: 'Best Indian Actor'
          }),

          new AdItem(SportsManComponent, {
            headline: 'Pele',
            body: 'Best Footballer'
          }),
        ];
      }

      loadComponent() {
        if (this.ads && this.ads.length > 0 && this.vc) {
          this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
          const adItem = this.ads[this.currentAdIndex];

          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            adItem.component
          );
      
          this.vc.clear();
          const componentRef1 = this.vc.createComponent<AdComponent>(
            componentFactory
          );
          componentRef1.instance.data = adItem.data; 
        }
      }
    }

   `;

   sportsManHtml = `
   <div class="job-ad">
      <h4>{{data.headline}}</h4>

      {{data.body}}
   </div>`;

   sportsManTs = `
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
    `;

   actorHtml = `
   <div class="hero-profile">
    <h4>{{data.name}}</h4>

    <p>{{data.bio}}</p>

    <strong>Hire this Actor today!</strong>
  </div>`;

  actorTs = `
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

  `;
}
