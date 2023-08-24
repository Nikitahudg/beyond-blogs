import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css']
})
export class WriteBlogComponent {
  public loggedIn: boolean = false;
  blogTitle = '';
  authorName = '';
  blogContent = '';
  blogTags = '';
  blogImageUrl = ''; // New property for image URL

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.loggedIn = params['loggedIn'] === 'loggedIn';
    });
  }

  saveBlog(): void {
    const confirmResult = confirm('Do you want to post the blog?');
    if (confirmResult) {
      this.postBlog();
    } else {
      // User chose not to post, you can implement any additional logic here
    }
  }

  postBlog(): void {
    const newBlog = {
      title: this.blogTitle,
      author: this.authorName,
      content: this.blogContent,
      tags: this.blogTags.split(',').map(tag => tag.trim()),
      imageUrl: this.blogImageUrl, // Include the image URL
      date: new Date().toLocaleDateString()
    };

    this.blogService.addBlogPost(newBlog);
    this.router.navigate(['/']); // Navigate back to home after posting
  }
}
