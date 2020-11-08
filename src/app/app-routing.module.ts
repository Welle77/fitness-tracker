import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/auth/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'start',
    loadChildren: () =>
      import('./pages/start/start/start.module').then((m) => m.StartModule),
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./pages/workout/create/create.module').then(
        (m) => m.CreateModule
      ),
  },
  {
    path: 'workoutlog',
    loadChildren: () =>
      import('./pages/workout/log-workout/log-workout.module').then(
        (m) => m.LogWorkoutModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
