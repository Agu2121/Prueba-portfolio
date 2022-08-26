import { Component, OnInit } from '@angular/core';
import { Hys } from 'src/app/model/hys';
import { HysService } from 'src/app/service/hys.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  habilidad: Hys[] = [];
  
  constructor(private sHabilidades: HysService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.sHabilidades.lista().subscribe(data => { this.habilidad = data; });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sHabilidades.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("no se pudo borrar la 'habilidad'");

        }
      )
    }
  }
}