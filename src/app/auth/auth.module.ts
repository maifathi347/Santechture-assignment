import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
  ]
})
export class AuthModule { }
