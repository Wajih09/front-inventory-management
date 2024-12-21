import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../services/category/category.service';
import { CategoryDto } from '../../../../gs-api/src/models';

@Component({
  selector: 'app-nouvelle-category',
  templateUrl: './nouvelle-category.component.html',
  styleUrl: './nouvelle-category.component.scss'
})
export class NouvelleCategoryComponent {
deleteTest(idCategory: number) {
  console.log('idCategory_del_test = ', idCategory);
  this.categoryService.delete(idCategory).subscribe(res => {
    //this.findAllCategories();
  }, error => {
    //debugger;
    //this.errorMsg = error.error.message;
  });
}

  categoryDto: CategoryDto = {};
  errorsMsg:Array<string>=[];

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  ) { }

  idCategory = this.activatedRoute.snapshot.params['idCategory'];
  ngOnInit(): void { 
    //category.id coming from <li> in page-categories.html => page-categories.ts editCategory(id:number) : void {this.router.navigate(['nouvellecategory', id])} => now when we're in nouvelle-category.ts we can only retrive that id from url because we don't have category.id in html
    //but here we're not interseted in queryparams but path params because in app-routing we have :idCategory with :
    // let idCategory;
    // this.activatedRoute.queryParams.subscribe(params =>{
    //   idCategory = params.idCategory;
    //   if (idCategory){
    //     this.categoryService.findById(idCategory).subscribe(cat => {
    //       this.categoryDto = cat;
    //     });
    //   }
    // })
    if (this.idCategory) {
      this.categoryService.findById(this.idCategory)
      .subscribe(cat => {
        this.categoryDto = cat;
      });
    }
  }

  saveClick(): void {
    this.categoryService.saveCategory(this.categoryDto).subscribe(res=>{
      this.router.navigate([`categories`]);
    }, error =>{
      this.errorsMsg = error.error.errors || ['An unknown error occurred'];
    });
  }

  cancelClick(): void {
    this.router.navigate([`categories`]);
  }
}
