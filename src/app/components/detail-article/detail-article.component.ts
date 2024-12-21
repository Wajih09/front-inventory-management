import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArticleDto } from '../../../gs-api/src/models';
import { ArticleService } from '../../services/article/article.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrl: './detail-article.component.scss'
})
export class DetailArticleComponent {

  @Input() //parent => child
  articleDto:ArticleDto={};
  @Output() //will be child => parent
  suppressionResultCustomEvent = new EventEmitter(); // EventEmitter imported from @angular/core and not stream

  constructor(private articleService:ArticleService,
    private router:Router
  ){
  }

  ngOnInit():void{
  }

  editArticle(idArticle?:number){
    this.router.navigate(['nouvelarticle', idArticle]);
    //localStorage.setItem('originArticle', 'edit');
  };

  deleteArticle(){
    this.articleService.deleteArticle(this.articleDto.id).subscribe(res=>{
      this.suppressionResultCustomEvent.emit('success');
    }, error => {
      this.suppressionResultCustomEvent.error(error.error.error); //error coming from back
    });
  }
}
