/* tslint:disable */
import { AdresseDto } from './adresse-dto';
export interface FournisseurDto {
  adresse?: AdresseDto;
  email?: string;
  id?: number;
  idEntreprise?: number;
  nom?: string;
  numTel?: string;
  photo?: string;
  prenom?: string;
}
