import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';

// Import the BlogPost interface from the blog.service file
import { BlogPost } from '../blog.service';

@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css']
})
export class WriteBlogComponent {
  newBlog: BlogPost = {
    title: '',
    author: '',
    content: '',
    tags: [],
    date: new Date().toISOString()
  };

  tagInput: string = '';
  constructor(private blogService: BlogService, private router: Router) {
    this.blogService.blogPostAdded$.subscribe((blogPost: BlogPost) => {
      alert('Blog successfully posted!');
      this.router.navigate(['/']); //
    });
  }


  submitBlog() {
    this.blogService.addBlog(this.newBlog);

    this.newBlog = {
      title: '',
      author: '',
      content: '',
      tags: [],
      date: new Date().toISOString()
    };
    this.tagInput = '';
    
    this.router.navigate(['/']); 
  }

  updateTags() {
    this.newBlog.tags = this.tagInput.split(',').map(tag => tag.trim());
  }
}
