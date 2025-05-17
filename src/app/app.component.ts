import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardGridComponent} from './componets/card-gird/card-gird.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ajsExam';
}
