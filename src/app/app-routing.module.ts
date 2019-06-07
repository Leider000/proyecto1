import { NgModule} from '@angular/core';
import { SectionPortafiolioComponent } from './paginas/section-portafiolio/section-portafiolio.component';
import { SectionComponent } from './shared/section/section.component';
import { AboutComponent } from './paginas/about/about.component';
import { PortaItemComponent } from './paginas/porta-item/porta-item.component';
import{Routes, RouterModule} from '@angular/router';

const app_routes: Routes =[
    {path: 'home', component: SectionComponent},
    {path: 'about',component: AboutComponent},
    {path: 'item',component: PortaItemComponent},
    {path: '**', pathMatch: 'full',redirectTo:'home'}
];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes , {useHash:true})
    ],
    exports:[
        RouterModule
    ]

})

export class AppRouting{

}