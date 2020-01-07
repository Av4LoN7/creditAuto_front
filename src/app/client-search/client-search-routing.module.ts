import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormClientSearchComponent } from './form-client-search/form-client-search.component';
import { IsSignedInGuard } from '../authentication/is-signed-in.guard';

const routes: Routes = [
  {
    path: 'searchclient',
    component: FormClientSearchComponent,
    canActivate: [IsSignedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSearchRoutingModule {}
