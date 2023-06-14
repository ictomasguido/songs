import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'songs',
    pathMatch: 'full'
  },
  {
    path: 'songs',
    loadChildren: () => import('./components/songs/songs.module').then( m => m.SongsModule)
  },
  // {
  //   path: 'song/:id',
  //   loadChildren: () => import('./components/songs/songs.module').then( m => m.SongsModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
