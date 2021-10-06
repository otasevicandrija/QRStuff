import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  btnLabel: string = '';

  constructor() {
   }

  ngOnInit(): void {
    this.btnLabel = "share" in navigator ? "Share" : "Share via e-mail";
  }

  createShareButton() {    
  
    const title = document.title;
    const text = "Check this out!";
    const url = window.location.href;

  
      if (navigator.share !== undefined) {
        navigator
          .share({
            title,
            text,
            url
          })
          .then(() => console.log("Shared!"))
          .catch(err => console.error(err));
      } else {
        window.location.href = `mailto:?subject=${title}&body=${text}%0A${url}`;
      }

  }

}
