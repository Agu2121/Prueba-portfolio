import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewproyectoComponent } from './components/proyectos/newproyecto.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto.component';
import { NewhysComponent } from './components/hys/newhys.component';
import { EdithysComponent } from './components/hys/edithys.component';
import { AcercaDeEditComponent } from './components/acerca-de/acerca-de-edit.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaeducacion', component: NeweducacionComponent},
  {path:'editeducacion/:id', component: EditeducacionComponent},
  {path:'nuevoproyecto', component: NewproyectoComponent},
  {path:'editproyecto/:id', component: EditproyectoComponent},
  {path:'nuevahab', component: NewhysComponent},
  {path:'edithab/:id', component: EdithysComponent },
  {path:'editpers', component: AcercaDeEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
