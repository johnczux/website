import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { MainComponent } from './main/main.component';
import { ExperimentalComponent } from './experimental/experimental.component';


const routes: Routes = [
  {path : 'projects', component: ProjectsComponent},
  {path : 'experimental', component: ExperimentalComponent},
  {path : 'main', component: MainComponent},
  {path : '', component: MainComponent},
  {path : '**', component: MainComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
