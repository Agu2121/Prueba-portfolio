import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hys } from 'src/app/model/hys';
import { HysService } from 'src/app/service/hys.service';

@Component({
  selector: 'app-newhys',
  templateUrl: './newhys.component.html',
  styleUrls: ['./newhys.component.css']
})
export class NewhysComponent implements OnInit {

  nombreH: string;
  porcentajeH: string;
  imagenH: string;

  constructor(private sHabilidad: HysService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {    
    const habilidad = new Hys(this.nombreH, this.porcentajeH, this.imagenH);
    this.sHabilidad.save(habilidad).subscribe(
      data => {
      alert("Habilidad añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Falló la creación de una nueva habilidad");
      this.router.navigate(['']);
    }
    )
  }
}
