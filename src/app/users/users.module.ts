import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';

import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersService } from './services/users.service';


@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
