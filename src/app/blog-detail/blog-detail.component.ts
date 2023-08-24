import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  
  blogPosts: any[] = [];
  selectedTags: string[] = [];
  searchQuery: string = '';
  filteredBlogPosts: any[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogPosts = this.blogService.getBlogPosts();
    this.applyFilter(); // Apply initial filter
  }

  handleSearch(): void {
    this.applyFilter();
  }

  filterByTags(tags: string[]): void {
    this.selectedTags = tags;
    this.applyFilter();
  }

  getAllTags(): string[] {
    const allTags: string[] = [];
    this.blogPosts.forEach(post => {
      post.tags.forEach((tag: string) => {
        if (!allTags.includes(tag)) {
          allTags.push(tag);
        }
      });
    });
    return allTags;
  }

  applyFilter(): void {
    this.filteredBlogPosts = this.blogPosts.filter(post =>
      this.matchesSearchQuery(post) && this.matchesSelectedTags(post)
    );
  }

  private matchesSearchQuery(post: any): boolean {
    const query = this.searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.author.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query)
    );
  }

 
  private matchesSelectedTags(post: any): boolean {
    if (this.selectedTags.length === 0) {
      return true; // Show all posts if no tags selected
    }
    return post.tags.some((tag: string) => this.selectedTags.includes(tag));
  }
  

}
