import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { CostComponent } from './cost/cost.component';
import { SignalsComponent } from './signals/signals.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { StudentComponent } from './student/student.component';
import { MessageComponent } from './message/message.component';
import { CrudComponent } from './crud/crud.component';
import { FilterApiComponent } from './filter-api/filter-api.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {path:'product',component:ProductComponent},
  {path:'about',component:AboutComponent},
  {path:'cost',component:CostComponent},
  {path:'signal',component:SignalsComponent},
  {path:'ng-template',component:NgTemplateComponent},
  {path:'student',component:StudentComponent},
  {path:'message',component:MessageComponent},
  {path:'crud',component:CrudComponent},
  {path:'filter-api',component:FilterApiComponent},
  {path:'map',component:MapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
