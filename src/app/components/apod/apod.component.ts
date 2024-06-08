import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NodeapodService } from '../../services/nodeapod.service';

@Component({
  selector: 'app-apod',
  standalone: true,
  imports: [DatePipe, FormsModule, HttpClientModule],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.css'
})
export class ApodComponent {
  currentDate = new Date();

  selectedDate = new Date();

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
    if (this.titulo && this.explanation && this.image) {
      console.log(this.titulo + this. explanation + this.image);
    }
  });
 }
}
