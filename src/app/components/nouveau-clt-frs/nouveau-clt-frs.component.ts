import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CltfrsService } from '../../services/cltfrs/cltfrs.service';
import { AdresseDto, ClientDto, FournisseurDto } from '../../../gs-api/src/models';
import { PhotosService } from '../../../gs-api/src/services/photos.service';
import SavePhotoParams = PhotosService.SavePhotoParams;

@Component({
  selector: 'app-nouveau-clt-frs',
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrl: './nouveau-clt-frs.component.scss'
})
export class NouveauCltFrsComponent implements OnInit {
  origin = '';
  idCltFrs = this.activatedRoute.snapshot.params['idCltFrs'];
  clientFournisseur : any = {};
  adresseDto: AdresseDto = {};
  clientDto:ClientDto = {};
  fournsisseurDto: FournisseurDto = {};
  errorsMsg: Array<string> = [];
  file: File | null = null;
  imgUrl: string | ArrayBuffer = 'assets/product.png';

  constructor(
    private activatedRoute : ActivatedRoute,
    private router: Router,
    private cltfrsService:CltfrsService,
    private photoService: PhotosService
  ) { }
  
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data:any) => {
      this.origin = data.origin;
    });
    console.log('this.originNvCltFrsOnInit = ', this.origin);
    console.log('this.idCltFrsNvCltFrsOnInit = ', this.idCltFrs);
    if(this.idCltFrs){
      this.cltfrsService.findCltFrsById(this.idCltFrs, this.origin).subscribe(cltFrs => {
        console.log('cltFrs = ', JSON.stringify(cltFrs));
        this.clientFournisseur = cltFrs;
        this.adresseDto = this.clientFournisseur.adresse;
      })
    }
  }
  saveClick():void{
    
    //we need object destruction to specify adressDto in the saev ! not like detail-ctr-frs.component where already having it
    this.origin === 'customer' ? this.clientDto = {...this.clientFournisseur, adresse : this.adresseDto}: this.origin === 'supplier' ? 
    this.fournsisseurDto = {...this.clientFournisseur, adresse : this.adresseDto} : this.clientFournisseur;

    console.log('this.clientDtoCompnent = ', JSON.stringify(this.clientDto));
    console.log('this.fournsisseurDto = ', JSON.stringify(this.fournsisseurDto));
    
    
    this.cltfrsService.enregistrerCltFrs({...this.clientFournisseur, adresse : this.adresseDto}, this.origin.toLowerCase()).subscribe(cltFrs =>{
      this.navigate();
      this.savePhoto(cltFrs.id, cltFrs.nom);
    }, err =>{
      this.errorsMsg = err.error.errors;
    });
  }

  cancelClick():void{
    this.navigate();
  }
  
  navigate(){
    this.router.navigate([`${`${this.origin}s`.toLowerCase()}`]);
  }

  onFileInput(files: FileList | null): void {
    if (files) {
      this.file = files.item(0);
      if (this.file) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(this.file);
        fileReader.onload = (event) => {
          if (fileReader.result) {
            this.imgUrl = fileReader.result;
          }
        };
      }
    }
  }

  savePhoto(idObject?: number, titre?: string): void {
    console.log(' this.origin. = ', this.origin);
    if (idObject && titre && this.file) {
      const params: SavePhotoParams = {
        id: idObject,
        file: this.file,
        title: titre,
        context: this.origin.toLowerCase() === 'customer' ? 'client' : 'fournisseur'
      };
      console.log(' params = ', params);
      this.photoService.savePhoto(params)
      .subscribe(res => {
        this.navigate();
      });
    } else {
      this.cancelClick();
    }
  }
}
