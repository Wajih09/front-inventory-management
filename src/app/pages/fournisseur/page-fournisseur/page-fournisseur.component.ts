import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FournisseurDto } from '../../../../gs-api/src/models';
import { CltfrsService } from '../../../services/cltfrs/cltfrs.service';

@Component({
  selector: 'app-page-fournisseur',
  templateUrl: './page-fournisseur.component.html',
  styleUrl: './page-fournisseur.component.scss'
})
export class PageFournisseurComponent implements OnInit {
  origin: string = '';
  fournisseursList : Array<FournisseurDto> = [];
  errorMsg = '';

  constructor(
    private router: Router,
    private activatedRoute : ActivatedRoute,
    private cltfrsService: CltfrsService
  ) { }
  
  ngOnInit(): void {
    // this.activatedRoute.data.subscribe((data:any) => {
    //   this.origin = data.origin;
    // });
    // console.log('this.origin = ', JSON.stringify(this.origin));
    this.findAllFournisseurs('supplier');
  }

  nouveauFournisseur():void{
    this.router.navigate([`nouveaufournisseur`])
  }

  findAllFournisseurs(origin:string){
    this.cltfrsService.findAllCltFrs(origin).subscribe(cltFrs =>{
      this.fournisseursList = cltFrs;
      console.log('this.fournisseursList = ', JSON.stringify(this.fournisseursList));
    })
  }

  handleSuppression(event:any){
    if(event){
      this.findAllFournisseurs('fournisseur');
    } else {
      this.errorMsg = event;
    }
  }
}
