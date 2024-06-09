import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApodComponent } from './components/apod/apod.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NodeapodService } from './services/nodeapod.service';
import { SimpsonComponent } from './components/simpson/simpson.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ApodComponent, SimpsonComponent, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 title = 'angular_examen_final';

  date?: string;
  titulo?: string;
  explanation?: string;
  image?: string;

 constructor(private nodeapod:NodeapodService){}

 enviar(): void{
  console.log(this.date);
  const urapi = `http://localhost:3000/fetch_apod/${this.date}`;
  this.nodeapod.getJson(urapi).subscribe((res: any) =>{
    console.log(res);
    this.titulo = res['titulo'];
    this.explanation = res['explanation'];
    this.image = res['image'];
    
  });
 }
}
