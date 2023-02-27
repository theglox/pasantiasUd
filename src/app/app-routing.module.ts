import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { LobbyComponent } from './pazysalvos/pages/lobby/lobby.component';
import { HomeComponent } from './pazysalvos/pages/home/home.component';
import { ErrorPageComponent } from './pazysalvos/shared/error-page/error-page.component';


const routes: Routes = [
    {
        path: '404',
        component: ErrorPageComponent

    },

    {
        path: 'pazysalvos',
        loadChildren: ()=> import('./pazysalvos/pazysalvos.module').then(m => m.PazysalvosModule)
    },
    {
        path: '**',
        redirectTo: '404'
    }


];




@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}


