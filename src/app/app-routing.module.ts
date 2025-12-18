import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'view-serie',
    loadChildren: () => import('./view-serie/view-serie.module').then( m => m.ViewSeriePageModule)
  },
  {
  path: 'edit-profile',
  loadChildren: () => import('./edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
