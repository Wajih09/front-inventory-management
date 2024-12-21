import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../../services/article/article.service';
import { ArticleDto } from '../../../../gs-api/src/models/article-dto';
import { CategoryDto } from '../../../../gs-api/src/models/category-dto';
import { CategoryService } from '../../../services/category/category.service';
import { PhotosService } from '../../../../gs-api/src/services/photos.service';
import SavePhotoParams = PhotosService.SavePhotoParams;

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrl: './nouvel-article.component.scss'
})
export class NouvelArticleComponent {


  articleDto: ArticleDto = {};
  categorieDto: CategoryDto = {};
  listeCategorie: Array<CategoryDto> = [];
  errorsMsg: Array<string> = [];
  idArticle = this.activatedRoute.snapshot.params['idArticle'];
  file: File | null = null;
  imgUrl: string | ArrayBuffer = 'assets/product.png';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private photosService: PhotosService
  ) { }

  ngOnInit(): void {
    this.categoryService.findAll()
      .subscribe(categories => {
        this.listeCategorie = categories;
      });
    if (this.idArticle) {
      this.articleService.findArticleById(this.idArticle).subscribe(article => {
        this.articleDto = article;
        this.categorieDto = this.articleDto.category ? this.articleDto.category : {};
      });
    }

    // if (localStorage.getItem('originArticle') && localStorage.getItem('originArticle') === 'edit'){

    // }
  }

  saveClick(): void {
    this.articleDto.category = this.categorieDto;
    this.articleService.enregistrerArticle(this.articleDto)
    .subscribe(art => {
      this.savePhoto(art.id, art.codeArticle);
    }, error => {
      this.errorsMsg = error.error.errors;
    });
    // this.articleDto.category = this.categorieDto;
    // //debugger;
    // this.articleService.enregistrerArticle(this.articleDto)
    //   .subscribe(art => {
    //     this.router.navigate([`articles`]);
    //   }, error => {
    //     this.errorsMsg = error.error.errors;
    //   });
  }

  cancelClick(): void {
    this.router.navigate([`articles`]);
  }

  TtcCalculate() {
    if (this.articleDto.prixUnitaireHt && this.articleDto.tauxTVA) {
      this.articleDto.prixUnitaireTtc =
        +this.articleDto.prixUnitaireHt + (+((this.articleDto.prixUnitaireHt * this.articleDto.tauxTVA) / 100));
    }
  }

  onFileInput(files: FileList | null): void {
    console.log("files = ", files);
    if (files) {
      this.file = files.item(0);
      if (this.file) {
        console.log("this.file = ", this.file);
        const fileReader = new FileReader();
        fileReader.readAsDataURL(this.file);
        fileReader.onload = (event) => {
          if (fileReader.result && typeof fileReader.result === 'string') {
            this.imgUrl = fileReader.result;
            console.log("this.imgUrl = ", this.imgUrl);
            console.log("typeof this.imgUrl = ", typeof(this.imgUrl));
            //this.articleDto.photo = this.imgUrl;
          }
        };
      }
    }
  }

  savePhoto(idArticle?: number, titre?: string): void {
    if (idArticle && titre && this.file) {
      const params: SavePhotoParams = {
        id: idArticle,
        file: this.file,
        title: titre,
        context: 'article'
      };
      console.log("params = ", params);
      this.photosService.savePhoto(params)
      .subscribe(res => {
        this.router.navigate(['articles']);
      });
    } else {
      this.router.navigate(['articles']);
    }
  }
}
