import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { LoansComponent } from './loans/loans.component';

const routes: Routes = [
  // we will create all our routes here
  {
    path:'loans',
    component:LoansComponent
  },{
    path:'loan-types',
    component:LoanTypesComponent
  },
  {
    path:'loans/add-loans',
    component:AddLoansComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
