import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DependencyInjectionProvidersComponent } from './components/dependency-injection-providers/dependency-injection-providers.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { UseFactoryComponent } from './components/use-factory/use-factory.component';
import { UseClassComponent } from './components/use-class/use-class.component';
import { InjectionTokenComponent } from './components/injection-token/injection-token.component';
import { DynamicComponentLoadingComponent } from './components/dynamic-component-loading/dynamic-component-loading.component';
import { HostBindingComponent } from './components/host-binding/host-binding.component';
import { SubjectServiceComponent } from './components/subject-service/subject-service.component';
import { NgTemplateOutletComponent } from './components/ng-template-outlet/ng-template-outlet.component';
 

@NgModule({
  declarations: [
    DependencyInjectionProvidersComponent, WrapperComponent, UseFactoryComponent, UseClassComponent, InjectionTokenComponent, DynamicComponentLoadingComponent, HostBindingComponent, SubjectServiceComponent, NgTemplateOutletComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
