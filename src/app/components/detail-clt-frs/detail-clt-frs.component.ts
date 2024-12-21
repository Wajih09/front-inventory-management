import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CltfrsService } from '../../services/cltfrs/cltfrs.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-detail-clt-frs',
  templateUrl: './detail-clt-frs.component.html',
  styleUrl: './detail-clt-frs.component.scss'
})
export class DetailCltFrsComponent {

  @Input()
  clientFournisseur : any = {};

  @Input()
  origin : string = '';

  @Output()
  suppressionResultCustomEvent = new EventEmitter();

  constructor(private cltFrsService:CltfrsService, private router: Router){}

  editCltFrs(idCltFrs?:number){ // of we can write editCltFrs() and later this.router.navigate([`nouveau${this.origin}`, this.clientFournisseur.id]);
    console.log('this.originDetailCltFrs', this.origin);
    console.log('idCltFrs', idCltFrs);
    this.router.navigate([`nouveau${this.origin}`, idCltFrs]);
    }

  deleteClientFournisseur(){
    this.cltFrsService.deleteCltFrs(this.clientFournisseur.id, this.origin).subscribe(res => {
      this.suppressionResultCustomEvent.emit('success');
    }, error => {
      this.suppressionResultCustomEvent.error(error.error.errors);
    });
  }
  }
