import { Injectable } from '@angular/core';
import { ArticlesService, EntreprisesService } from '../../../gs-api/src/services';
import { Observable } from 'rxjs';
import { ArticleDto, EntrepriseDto } from '../../../gs-api/src/models';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private entrepriseService: EntreprisesService, private article:ArticlesService) { }

  sinscrire(entrepriseDto: EntrepriseDto): Observable<EntrepriseDto> {
    return this.entrepriseService.save(entrepriseDto);
  }

  findAll(): Observable<ArticleDto[]> {
    return this.article.findAll();
  }
}
