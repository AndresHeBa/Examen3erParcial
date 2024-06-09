import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NodeapodService } from '../../services/nodeapod.service';

@Component({
  selector: 'app-simpson',
  standalone: true,
  imports: [ FormsModule, HttpClientModule],
  templateUrl: './simpson.component.html',
  styleUrl: './simpson.component.css'
})
export class SimpsonComponent {

  constructor(private nodeapod:NodeapodService){}

  nombre? : string;
  historia? : string;
  imagen? : string;
  genero? : string;
  estado? : string;
  ocupacion? : string;


  enviarSimpson(): void{
    const urapi = `http://localhost:3000/fetch_simpson/${this.nombre}`;
    this.nodeapod.getJson(urapi).subscribe((res: any) =>{
      console.log(res);
      this.historia = res['historia'];
      this.imagen = res['imagen'];
      this.genero = res['genero'];
      this.estado = res['estado'];
      this.ocupacion = res['ocupacion'];
      if (this.historia) {
        console.log(this.historia + this.imagen + this.genero + this.estado + this.ocupacion);
      }
    });
  }
}
