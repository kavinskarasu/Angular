import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { ClientsComponent } from './clients/clients.component';
import { LeadsGridComponent } from './leads/leads-listing/leads-grid/leads-grid.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { LoansComponent } from './loans/loans.component';
import { PhotoComponent } from './photo/photo.component';
import { ProdectComponent } from './prodect/prodect.component';

const routes: Routes = [
  // we will create all our routes here
  {
    path:'loans',
  
    children:[
      {
        path:'add-loans',component:AddLoansComponent
      },{
        path:'loan-types',component:LoanTypesComponent
      }
    ]
  },{
    // redirection
    path:'loan-types',
    redirectTo:'new-loans'
  },
  {
    path:'loans/add-loans',
    component:AddLoansComponent
  },
  {
    path:"new-loans",
    component:AddLoansComponent
  },
  // developers will add "/"  it is error  comman mistake"
    // ex:  path:'loans' is correct  path:'loans/' is not correct
  // component name in quotes error
  // bad formed array of routes
  //someting your editor will not import correctly
   
  /*
       param routes
  */
{
  path:'addProdect/:id',component:ProdectComponent},{
  path:'addProdect/:id/photo/:userId',component:PhotoComponent
  },
  {
    path:'clients',
    component:ClientsComponent
  },{
    path:'',
    redirectTo:'leads',
    pathMatch:'full'
  }
  ,{
    path:'leads',
    component:LeadsGridComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
