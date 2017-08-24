import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title: string;

  constructor(private appService: AppService) {
    // Зато этот вывод срабатывает
    console.log('Hello from constructor!');

    this.appService.getData().subscribe(data => this.title = data.json().title);
  }

  ngOnInit() {
    console.log('OnInit works!');

    // Если перенести это дело в конструктор, то не сработает (с включенным скриптом бесшовного перехода)
  }

}
