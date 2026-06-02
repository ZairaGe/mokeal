import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import NavbarComponent from 'app/layouts/navbar/navbar';  

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export default class AboutComponent implements OnInit { 

  ngOnInit(): void {

    window.scrollTo(0, 0);
  }
}