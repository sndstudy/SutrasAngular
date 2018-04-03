import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {ImportComponent} from './import/import.component'
import {Chapter4Component} from './chapter4/chapter4.component'

const myRoutes = [
    {path: '', component: ImportComponent},
    {path: 'test', component: Chapter4Component}
];

export const MY_ROUTES: ModuleWithProviders = RouterModule.forRoot(myRoutes);

