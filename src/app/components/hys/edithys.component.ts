import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hys } from 'src/app/model/hys';
import { HysService } from 'src/app/service/hys.service';

@Component({
  selector: 'app-edithys',
  templateUrl: './edithys.component.html',
  styleUrls: ['./edithys.component.css']
})
export class EdithysComponent implements OnInit {

  habilidad: Hys = null;

  constructor(private sHabilidades: HysService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidades.detail(id).subscribe(
      data =>{
        this.habilidad = data;
      }, err =>{        
        alert ('Error al editar proyecto')
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidades.update(id, this.habilidad).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert ("Error al editar habilidad");
        this.router.navigate(['']);
      }
    )

  }

}
