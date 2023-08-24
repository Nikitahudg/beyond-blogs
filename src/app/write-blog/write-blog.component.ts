import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';

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
    date: new Date().toISOString(),
    imageUrl:''
  };

  public loggedIn: boolean = false;
  blogTitle = '';
  authorName = '';
  blogContent = '';
  blogTags = '';
  blogImageUrl = ''; 

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
    }
  }


  submitBlog() {
    this.blogService.addBlog(this.newBlog);

    this.newBlog = {
      title: '',
      author: '',
      content: '',
      tags: [],
      date: new Date().toISOString(),
      imageUrl :''

  postBlog(): void {
    const newBlog = {
      title: this.blogTitle,
      author: this.authorName,
      content: this.blogContent,
      tags: this.blogTags.split(',').map(tag => tag.trim()),
      imageUrl: this.blogImageUrl,
      date: new Date().toLocaleDateString()

    };

    this.blogService.addBlogPost(newBlog);
    this.router.navigate(['/']); 
  }
}
