import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependencyInjectionProvidersComponent } from './components/dependency-injection-providers/dependency-injection-providers.component';
import { DynamicComponentLoadingComponent } from './components/dynamic-component-loading/dynamic-component-loading.component';
import { InjectionTokenComponent } from './components/injection-token/injection-token.component';
import { IntroComponent } from './components/intro/intro.component';
import { UseClassComponent } from './components/use-class/use-class.component';
import { UseExistingComponent } from './components/use-existing/use-existing.component';
import { UseFactoryComponent } from './components/use-factory/use-factory.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'intro',
        component: IntroComponent
      },
      {
        path: 'dependency-injection',
        component: DependencyInjectionProvidersComponent
      },
      {
        path: 'use-factory',
        component: UseFactoryComponent
      },
      {
        path: 'injection-token',
        component: InjectionTokenComponent
      },
      {
        path: 'use-existing',
        component: UseExistingComponent
      },
      {
        path: 'dynamic-component-loading',
        component: DynamicComponentLoadingComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
