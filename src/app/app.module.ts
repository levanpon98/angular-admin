import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtModule} from "@auth0/angular-jwt";
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {UsersModule} from "./modules/users/users.module";
import {ProductsModule} from "./modules/products/products.module";

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MenuComponent} from "./components/menu/menu.component";
import {LogoutComponent} from './components/logout/logout.component';
import {AdminComponent} from './components/admin/admin.component';

import {AuthService} from "./services/auth.service";
import {JwtHelperService} from '@auth0/angular-jwt';

import { AuthInterceptor } from "./guard/auth.interceptor";

export function tokenGetter() {
    return localStorage.getItem("token");
}

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        LogoutComponent,
        AdminComponent,
        MenuComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                whitelistedDomains: ["http://localhost:4000/"],
            }
        }),
        CommonModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot(), // ToastrModule added
        UsersModule,
        ProductsModule,

    ],
    providers: [
        AuthService,
        JwtHelperService,
        {
            provide : HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi   : true,
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
