import { RedirectCommand, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BasetemplateComponent } from './basetemplate/basetemplate.component';
import { BlankpageComponent } from './layouts/blankpage/blankpage.component';
import { FullpageComponent } from './layouts/fullpage/fullpage.component';

// export const routes: Routes = [
//     {
//         path:'',
//         component:BasetemplateComponent
//     },
//     {
//         path:'about',
//         component:AboutComponent
//     }
// ];


export const routes: Routes = [
    {
        path:'',
        component:BlankpageComponent,
        children:[
           {
            path:'',
            redirectTo:'auth',
            pathMatch:'full'
           },
           {
            path:'auth',
            loadChildren: ()=> import('./modules/auth/auth.module').then(m=> m.AuthModule)
           }
        ]
    },
    {
        path:'',
        component:FullpageComponent,
        children:[
            {
                path:'',
                redirectTo:'dashboard',
                pathMatch:'full'
            },
            {
                path:'dashboard',
                loadChildren: ()=> import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
            }
        ]
    }
];
