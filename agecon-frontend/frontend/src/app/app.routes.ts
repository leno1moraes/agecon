import { provideRouter, Routes, withDebugTracing } from '@angular/router';
import { ConcursoComponent } from './concurso/concurso.component';

export const routes: Routes = [
    {
        path:'concurso',
        component: ConcursoComponent
    }
];
