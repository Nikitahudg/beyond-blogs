import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  post?: BlogPost;
  filteredPosts: BlogPost[] = [];
  blogPosts: any[] = [];
  selectedTags: string[] = [];
  searchQuery: string = '';
  filteredBlogPosts: any[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    if (title) {
      this.post = this.blogService.getBlogPostByTitle(title);
      this.blogPosts = this.blogService.getBlogPosts();
      this.applyFilter(); 
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
      return true;
    }
    return post.tags.some((tag: string) => this.selectedTags.includes(tag));
  }

  filterByTag(tag: string): void {
    this.filteredPosts = this.blogService.getBlogPostByTags([tag]);
  }
}
