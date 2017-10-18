import {RouterModule, Routes} from '@angular/router';

// map paths to components
const AppRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'}
];

export const Routing = RouterModule.forRoot(AppRoutes);
