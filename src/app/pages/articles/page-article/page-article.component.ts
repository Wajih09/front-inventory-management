import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleDto } from '../../../../gs-api/src/models';
import { DetailArticleComponent } from '../../../components/detail-article/detail-article.component';
import { ArticleService } from '../../../services/article/article.service';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrl: './page-article.component.scss'
})
export class PageArticleComponent {

  articlesList: Array<ArticleDto> = [];
  errorMsg = '';

  constructor(
    private router: Router,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.fetchArticles();
  }

  nouvelArticle(): void {
    this.router.navigate(['nouvelarticle'])
  }

  fetchArticles() {
    this.articleService.findAllArticles().subscribe(articles => {
      this.articlesList = articles;
    })
  }

  handleSuppression(event: any) {
    if (event) {
      this.fetchArticles();

    } else {
      this.errorMsg = event;
    }
  }
}
