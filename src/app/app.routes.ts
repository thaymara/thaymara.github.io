import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';

// map paths to components
const AppRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: ''},
    {path: 'en', component: AppComponent}
];

export const Routing = RouterModule.forRoot(AppRoutes);
