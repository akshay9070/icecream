import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule}  from '@angular/common';
import { CheckExistingComponent } from './check-existing/check-existing.component';
import { PerformKycComponent } from './perform-kyc/perform-kyc.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'


const routes: Routes = [
  { path: 'create/account', component: CreateAccountComponent },
  { path: 'performKyc', component: PerformKycComponent },
  { path: 'checkExistingAccount', component: CheckExistingComponent },


];

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    CheckExistingComponent,
    PerformKycComponent,
    HeaderComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
