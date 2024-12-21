import { Injectable } from '@angular/core';
import { CategoryDto } from '../../../gs-api/src/models';
import { CategoriesService } from '../../../gs-api/src/services';
import { Observable, of } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private categoriesService: CategoriesService,
    private userService: UserService
  ) { }

  saveCategory(categoryDto: CategoryDto): Observable<CategoryDto> {
    categoryDto.idEntreprise = this.userService.getConnectedUser()?.entreprise?.id;
    return this.categoriesService.save(categoryDto);
  }

  findById(idCategory: number): Observable<CategoryDto> {
    return this.categoriesService.findById(idCategory);
  }

  findAll(): Observable<CategoryDto[]> {
    return this.categoriesService.findAll();
  }

  delete(idCategory?: number): Observable<any> {
    if(idCategory){
      return this.categoriesService.delete(idCategory);
    }
    return of();
  }
}
