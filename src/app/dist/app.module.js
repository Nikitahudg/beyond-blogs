"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var home_component_1 = require("./home/home.component");
var write_blog_component_1 = require("./write-blog/write-blog.component");
var http_1 = require("@angular/common/http");
var blog_list_component_1 = require("./blog-list/blog-list.component");
var blog_service_1 = require("./blog.service");
var forms_1 = require("@angular/forms");
var footer_component_1 = require("./footer/footer.component");
var blog_detail_component_1 = require("./blog-detail/blog-detail.component");
var user_login_component_1 = require("./user-login/user-login.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                home_component_1.HomeComponent,
                write_blog_component_1.WriteBlogComponent,
                blog_list_component_1.BlogListComponent,
                footer_component_1.FooterComponent,
                blog_detail_component_1.BlogDetailComponent,
                user_login_component_1.UserLoginComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [blog_service_1.BlogService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
