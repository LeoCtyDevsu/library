import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { authenticationGuard } from './shared/guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      )
  },
  {
    path: 'admin',
    component: LayoutComponent,
    loadChildren: () =>
      import('./library/library.module').then((m) => m.LibraryModule),
    canActivate: [authenticationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
