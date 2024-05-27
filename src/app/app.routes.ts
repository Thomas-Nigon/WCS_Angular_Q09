import { Routes } from '@angular/router';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { Component } from '@angular/core';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';

export const routes: Routes = [
  { path: 'kittens', component: ListKittenComponent },
  { path: 'add', component: CreateKittenComponent },
  { path: '', component: UserKittenComponent },
];
