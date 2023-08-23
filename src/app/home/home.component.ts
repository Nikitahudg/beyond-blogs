import { Component, OnInit } from '@angular/core';
import { BlogService, BlogPost } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredPosts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.featuredPosts = this.blogService.getFeaturedPosts();
      console.log(this.featuredPosts);
    }
}
