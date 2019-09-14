import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor() {}

  ngOnInit() {
    console.log('firing');
    $(document).ready(function() {
    console.log('firing2');
      $('.sidenav').sidenav();
      console.log('fired');
    });
  }
}
