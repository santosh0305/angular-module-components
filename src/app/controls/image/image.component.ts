import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  imageSource: string = "https://picsum.photos/seed/picsum/200/300"
  imgHeight:number = 100
  imgWidth:number = 180

  constructor() { }

  ngOnInit() {
  }

}