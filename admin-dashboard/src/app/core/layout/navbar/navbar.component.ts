import { Component, output} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MATERIAL_LAYOUT} from '../../shared/material/layout.imports'



@Component({
  selector: 'app-navbar',
  imports: [...MATERIAL_LAYOUT,ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  
  menuClick = output<void>();

  //  GET USR FROM SEESION
  value = sessionStorage.getItem('user');
  user = this.value
  ? JSON.parse(this.value)
  : false;

  openSidebar() {
    this.menuClick.emit();
  }

 private readonly router = inject(Router);
searchControl =
  new FormControl('');
  
  //ON SEARCH REDIRECT TO TRANSACTION
onSearch(): void {

  const keyword =
    this.searchControl.value?.trim();


  if (!keyword) {
    return;
  }

  this.router.navigate(
    ['/transactions'],
    {
      queryParams: {
        searchKeyword: keyword
      }
    }
  );
}

//REMOVE USER AND ISSESSIONACTIVE FROM SESSION STORAGE
logout(){
   sessionStorage.removeItem("user");
   sessionStorage.removeItem("isSessionActive")

}
}

