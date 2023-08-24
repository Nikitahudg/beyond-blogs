"use strict";
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { WriteBlogComponent } from './write-blog/write-blog.component';
// import { BlogDetailComponent } from './blog-detail/blog-detail.component';
// import { BlogListComponent } from './blog-list/blog-list.component';
// import { UserLoginComponent } from './user-login/user-login.component';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
//   const routes: Routes = [
//     { path: '', component:BlogDetailComponent },
//     { path: 'write-blog', component: WriteBlogComponent },
//     {path:'login',component:UserLoginComponent},
//     { path: 'blog/:title', component: BlogDetailComponent },
//     { path: 'blog', component: BlogListComponent },
//     { path: '**', redirectTo: '' },
//   ];
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var write_blog_component_1 = require("./write-blog/write-blog.component");
var blog_detail_component_1 = require("./blog-detail/blog-detail.component");
var blog_list_component_1 = require("./blog-list/blog-list.component");
var user_login_component_1 = require("./user-login/user-login.component");
var routes = [
    { path: '', component: blog_detail_component_1.BlogDetailComponent },
    { path: 'write-blog', component: write_blog_component_1.WriteBlogComponent },
    { path: 'login', component: user_login_component_1.UserLoginComponent },
    { path: 'blog/:title', component: blog_detail_component_1.BlogDetailComponent },
    { path: 'blog', component: blog_list_component_1.BlogListComponent },
    { path: '**', redirectTo: '' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
