import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cmp1Component } from './components/cmp1/cmp1.component';
import { Cmp2Component } from './components/cmp2/cmp2.component';
import { Cmp3Component } from './components/cmp3/cmp3.component';
import { WildcardComponent } from './components/wildcard/wildcard.component';

const routes: Routes = [
  {path: 'cpm1', component: Cmp1Component},
  {path: 'cpm2', component: Cmp2Component},
  {path: 'cpm3', component: Cmp3Component},
  {path: '**', component: WildcardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
