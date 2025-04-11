import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudenthomepageComponent } from './studenthomepage/studenthomepage.component';

@Component({
  selector: 'app-root',
  imports: [StudenthomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homepage';
}
