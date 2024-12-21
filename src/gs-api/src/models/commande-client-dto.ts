/* tslint:disable */
import { ClientDto } from './client-dto';
export interface CommandeClientDto {
  client?: ClientDto;
  code?: string;
  dateCommande?: number;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  id?: number;
  idEntreprise?: number;
}
