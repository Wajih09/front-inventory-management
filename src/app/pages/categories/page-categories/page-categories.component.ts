import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../../services/category/category.service';
import { UserService } from '../../../services/user/user.service';
import { CategoryDto } from '../../../../gs-api/src/models';

@Component({
  selector: 'app-page-categories',
  templateUrl: './page-categories.component.html',
  styleUrl: './page-categories.component.scss'
})
export class PageCategoriesComponent {

  categoriesList: Array<CategoryDto> = [];
  errorMsg = '';
  selectedCatIdToDelete? = -1;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.findAllCategories();
  }

  findAllCategories() {
    this.categoryService.findAll().subscribe(res => {
      this.categoriesList = res;
    });
  }

  nouvelleCategory(): void {
    this.router.navigate(['nouvellecategory'])
  }

  editCategory(idCategory?: number): void {
    console.log('idCategory_edt = ', idCategory);
    this.router.navigate(['nouvellecategory', idCategory])
  }

  selectCatToDelete(id?: number): void {
    this.selectedCatIdToDelete = id;
  }

  deleteCategory() {
    if (this.selectedCatIdToDelete !== -1) {
      this.categoryService.delete(this.selectedCatIdToDelete).subscribe(res => {
        this.findAllCategories();
      }, error => {
        //debugger;
        this.errorMsg = error.error.message;
      });
    }
  }
}
