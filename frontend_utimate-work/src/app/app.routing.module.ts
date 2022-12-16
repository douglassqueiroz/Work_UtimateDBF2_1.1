import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MusicComponent } from "./music/music.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

const routes: Routes = [{
    path:'music', 
    component: SidebarComponent,
        children:[
        {
            path: 'musicas',
            component: MusicComponent
        }]
},
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRootingModule{
   
    



}