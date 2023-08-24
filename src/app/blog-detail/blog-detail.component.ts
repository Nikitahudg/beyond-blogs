import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService, BlogPost } from '../blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  post?: BlogPost;
  filteredPosts: BlogPost[] = [];
 // comment: string = '';  

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    if (title) {
      this.post = this.blogService.getBlogPostByTitle(title);
    }
  }

  filterByTag(tag: string): void {
    this.filteredPosts = this.blogService.getBlogPostByTags([tag]);
  }
  // submitComment(): void {
  //   if (this.post && this.comment) {
  //     this.blogService.addCommentToPost(this.post, this.comment);
  //     this.comment = ''; 
  //   }
  // }
  
  
}
