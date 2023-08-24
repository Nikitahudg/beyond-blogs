import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService, BlogPost } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  filteredPosts: BlogPost[] = [];

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const tags = params['tags'];
      if (tags) {
        this.filteredPosts = this.blogService.getBlogPostByTags(tags);
      } else {
        this.filteredPosts = this.blogService.getLatestBlogPosts(); 
      }
    });
  }
}
