import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependencyInjectionProvidersComponent } from './components/dependency-injection-providers/dependency-injection-providers.component';
import { DynamicComponentLoadingComponent } from './components/dynamic-component-loading/dynamic-component-loading.component';
import { UseClassComponent } from './components/use-class/use-class.component';
import { UseFactoryComponent } from './components/use-factory/use-factory.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'dependency-injection',
        component: DependencyInjectionProvidersComponent
      },
      {
        path: 'use-factory',
        component: UseFactoryComponent
      },
      {
        path: 'use-class',
        component: UseClassComponent
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
