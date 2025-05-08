import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CitiesComponent } from './cities/cities.component';
import { CityDetailComponent } from './city-detail/city-detail.component';

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
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard'
    },
    {
        path: 'cities',
        component: CitiesComponent,
        title: 'Cities Page'
    },
    {
        path: 'detail/hero/:id',
        component: HeroDetailComponent,
        title: 'Hero Detail'
    },
    {
        path: 'detail/city/:id',
        component: CityDetailComponent,
        title:'City Detail'
    }
]
