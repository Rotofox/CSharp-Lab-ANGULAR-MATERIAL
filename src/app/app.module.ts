import { SharedModule } from './modules/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { UserRolesComponent } from './components/users-role/users-role.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpensesComponent,
    UsersComponent,
    LoginComponent,
    RegisterComponent,
    UserRolesComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
