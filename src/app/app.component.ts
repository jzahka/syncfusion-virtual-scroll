import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numCols = [...new Array(5)];
  numChips = [...new Array(3)];
  data = [...new Array(100)].map((_, idx) => ({
    id: idx,
    title: `parent ${idx}`,
    children: [...new Array(10)].map((_, idx2) => ({
      id: `${idx}:${idx2}`,
      title: `child ${idx}:${idx2}`,
    }))
  }))
}
