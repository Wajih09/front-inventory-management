import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CltfrsService } from '../../../services/cltfrs/cltfrs.service';
import { ClientDto } from '../../../../gs-api/src/models';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrl: './page-client.component.scss'
})
export class PageClientComponent implements OnInit{
  
  clientsList : Array<ClientDto> = [];
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
    this.findAllClients();
  }

  nouveauClient():void{
    this.router.navigate([`nouveauclient`])
  }

  findAllClients(){
    this.cltfrsService.findAllCltFrs('customer').subscribe(cltFrs =>{
      this.clientsList = cltFrs;
      console.log('this.clientsList = ', JSON.stringify(this.clientsList));
    })
  }

  handleSuppression(event:any){
    if(event){
      this.findAllClients();
    } else {
      this.errorMsg = event;
    }
  }
}
