import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de-edit',
  templateUrl: './acerca-de-edit.component.html',
  styleUrls: ['./acerca-de-edit.component.css']
})
export class AcercaDeEditComponent implements OnInit {
  pers: persona = null;
  isLogged = false;

  constructor(
    private personaS: PersonaService,
    private activateRouter: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

    const id = this.activateRouter.snapshot.params['id'];
    
    this.personaS.getPersona().subscribe(
      data =>{
        this.pers = data;
      }, err =>{
        alert("Error.");
        this.router.navigate(['']);
      }
    )
  }
  

  onUpdate(): void{
    this.personaS.update(this.pers).subscribe(
      data =>{
        this.router.navigate(['']);
        }, err =>{
          this.router.navigate(['']);
          })
          
        }
}
