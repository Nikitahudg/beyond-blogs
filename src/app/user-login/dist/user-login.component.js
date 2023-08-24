"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserLoginComponent = void 0;
var core_1 = require("@angular/core");
var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(router) {
        this.router = router;
        this.signupUsers = [];
        this.signupObj = {
            userName: '',
            email: '',
            password: ''
        };
        this.loginObj = {
            userName: '',
            password: ''
        };
        this.showSignupForm = false;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        var storedUsers = localStorage.getItem('signUpUsers');
        if (storedUsers) {
            this.signupUsers = JSON.parse(storedUsers);
        }
    };
    UserLoginComponent.prototype.onLogin = function () {
        var _this = this;
        console.log('Entered credentials:', this.loginObj);
        console.log('Registered users:', this.signupUsers);
        var foundUser = this.signupUsers.find(function (user) {
            return user.userName === _this.loginObj.userName && user.password === _this.loginObj.password;
        });
        if (!foundUser) {
            console.log('Login successful');
            this.router.navigate(['../write-blog']);
        }
        else {
            console.log('Invalid login');
        }
    };
    UserLoginComponent.prototype.onSignup = function () {
        this.signupUsers.push(this.signupObj);
        localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
        // You can add additional logic here after signup
        console.log('Updated Signup Users:', this.signupUsers);
    };
    UserLoginComponent.prototype.toggleForm = function () {
        this.showSignupForm = !this.showSignupForm;
        // Reset form fields
        this.signupObj.userName = '';
        this.signupObj.email = '';
        this.signupObj.password = '';
        this.loginObj.userName = '';
        this.loginObj.password = '';
    };
    UserLoginComponent = __decorate([
        core_1.Component({
            selector: 'app-user-login',
            templateUrl: './user-login.component.html',
            styleUrls: ['./user-login.component.css']
        })
    ], UserLoginComponent);
    return UserLoginComponent;
}());
exports.UserLoginComponent = UserLoginComponent;
