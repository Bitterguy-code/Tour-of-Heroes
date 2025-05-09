import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CitiesComponent } from './cities/cities.component';
import { CityDetailsComponent } from './city-details/city-details.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: HeroesComponent,
        title: 'Heroes Page'
    },
    {
        path: 'cities',
        component: CitiesComponent,
        title: 'Cities Page'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard'
    },
    {
        path: 'detail/hero/:id',
        component: HeroDetailComponent
    },
    {
        path: 'detail/city/:id',
        component: CityDetailsComponent
    }
    
]
