import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PodarkaComponent } from './podarka/podarka.component';

export const routes: Routes = [
    {path:'',component:MainComponent },
    {path: 'gift', component:PodarkaComponent}
]