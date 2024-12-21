import { Injectable } from '@angular/core';
import { ClientsService, FournisseurService } from '../../../gs-api/src/services';
import { Observable, of } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CltfrsService {

  constructor(private clientsService:ClientsService,
    private fournisseurService:FournisseurService,
    private userService:UserService
  ) { }

  enregistrerCltFrs(cltFrsDto:any, origin:string):Observable<any>{
    cltFrsDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    console.log('cltFrsDtoService = ', JSON.stringify(cltFrsDto));
    const savedCltFrs = origin === 'customer' ? this.clientsService.save(cltFrsDto) : origin === 'supplier' ? 
    this.fournisseurService.save(cltFrsDto): of();
    return savedCltFrs;
  }

  deleteCltFrs(idCltFrs: number, origin:string):Observable<any>{
    const deletedCltFrs = origin === 'customer' ? this.clientsService.delete(idCltFrs) : origin === 'supplier' ? 
    this.fournisseurService.delete(idCltFrs): of();
    return deletedCltFrs;
  }

  findCltFrsById(idCltFrs: number, origin:string):Observable<any>{
    const fetchedCltFrs = origin === 'Customer' ? this.clientsService.findById(idCltFrs) : origin === 'Supplier' ? 
    this.fournisseurService.findById(idCltFrs): of();
    return fetchedCltFrs;
  }

  findAllCltFrs(origin:string):Observable<any[]>{
    console.log('origin_cltfrsService = ', JSON.stringify(origin));
    const listCltFrs = origin === 'customer' ? this.clientsService.findAll() : origin === 'supplier' ? 
    this.fournisseurService.findAll(): of([]);
    console.log('listCltFrs = ', JSON.stringify(listCltFrs));
    return listCltFrs;
  }

  
  // enregistrerClient(clientDto:ClientDto):Observable<ClientDto>{
  //   clientDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
  //   return this.clientsService.save(clientDto);
  // }

  // deleteClient(idClient: number):Observable<any>{
  //   return this.clientsService.delete(idClient);
  // }

  // findClientById(idClient: number):Observable<ClientDto>{
  //   return this.clientsService.findById(idClient);
  // }

  // findAllClients():Observable<ClientDto[]>{
  //   return this.clientsService.findAll();
  // }

  // enregistrerFournisseur(fournisseurDto:FournisseurDto):Observable<FournisseurDto>{
  //   fournisseurDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
  //   return this.fournisseurService.save(fournisseurDto);
  // }

  // deleteFournisseur(idFournisseur: number):Observable<any>{
  //   return this.fournisseurService.delete(idFournisseur);
  // }

  // findFournisseurById(idFournisseur: number):Observable<FournisseurDto>{
  //   return this.fournisseurService.findById(idFournisseur);
  // }

  // findAllFournisseurs():Observable<FournisseurDto[]>{
  //   return this.fournisseurService.findAll();
  // }

}
