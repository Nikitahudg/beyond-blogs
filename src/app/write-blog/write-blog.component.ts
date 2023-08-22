import { Component } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css']
})
export class WriteBlogComponent {
  blogTitle = '';
  authorName = '';
  blogContent = '';
  blogTags = '';

  constructor(private blogService: BlogService) {}

  saveBlog(): void {
    const newBlog = {
      title: this.blogTitle,
      author: this.authorName,
      content: this.blogContent,
      tags: this.blogTags.split(',').map(tag => tag.trim()),
      date: new Date().toLocaleDateString()
    };
  }
}
