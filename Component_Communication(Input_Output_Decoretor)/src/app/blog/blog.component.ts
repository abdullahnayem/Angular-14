import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from '../app.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Output() OnLike = new EventEmitter();
   @Input() blog!:Blog;
  constructor() { }

  ngOnInit(): void {
  }

  Like():void{
  this.OnLike.emit(this.blog);
  }
}
