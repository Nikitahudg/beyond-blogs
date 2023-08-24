// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BlogService, BlogPost } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  featuredPosts: BlogPost[] = [
    {
      "title": "Favourite Coffee Place in London",
      "author": "Aanchal Shah",
      "date": "2023-08-23",
      "content": "Another favourite London cafe of ours...",
      "tags": ["coffee", "london", "cafe"],
      "imageUrl": "https://club.atlascoffeeclub.com/wp-content/uploads/2017/08/kris-atomic-39750-750x400.jpg"
    },
    {
      "title": "Spooky Halloween",
      "author": "Aanchal Shah",
      "date": "2023-08-24",
      "content": "I’m just barely hanging on as we prepare for back to school...",
      "tags": ["holidays", "creativity", "festivals"],
      "imageUrl": "https://mcdn.wallpapersafari.com/medium/48/3/dxbych.jpg"
    },
    {
      "title": "Pride and Prejudice",
      "author": "Aanchal Shah",
      "date": "2023-08-24",
      "content": "We’re excited to share this female author booklist with you!...",
      "tags": ["literature"],
      "imageUrl": "https://th.bing.com/th/id/R.57deea91db4aef5b18be24278741da71?rik=58dpmOqGLLoZTg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-DlV4BFd3fIs%2fUho-mgx_3hI%2fAAAAAAAAL3E%2f4sSmxi1WdIQ%2fs1600%2fPride%2band%2bPrejudice.jpg&ehk=doZ6%2fEZXRHajyxp6AzT417pBx%2bb3S6atOP6jb4Fbk0U%3d&risl=&pid=ImgRaw&r=0"
    }
  ];
  //featuredPosts: BlogPost[] = [];
  latestPost: BlogPost | null = null;
  allPosts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.featuredPosts;
  //  this.featuredPosts = this.blogService.getBlogPosts(); 
    this.latestPost = this.blogService.getLatestPost();
    this.allPosts = this.blogService.getBlogPosts();
  }
}
