import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  searchByTags(): void {
    if (this.searchQuery.trim() !== '') {
      this.router.navigate(['/blog'], { queryParams: { tags: this.searchQuery } });
    }
  }
}
