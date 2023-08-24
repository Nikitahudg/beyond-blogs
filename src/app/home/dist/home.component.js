"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
// import { Component, OnInit } from '@angular/core';
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(blogService) {
        this.blogService = blogService;
        this.featuredPosts = [
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
        this.latestPost = null;
        this.allPosts = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.featuredPosts;
        //  this.featuredPosts = this.blogService.getBlogPosts(); 
        this.latestPost = this.blogService.getLatestPost();
        this.allPosts = this.blogService.getBlogPosts();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
