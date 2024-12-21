import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrsComponent } from './components/nouveau-clt-frs/nouveau-clt-frs.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './components/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageCategoriesComponent } from './pages/categories/page-categories/page-categories.component';
import { NouvelleCategoryComponent } from './pages/categories/nouvelle-category/nouvelle-category.component';
import { PageUtilisateurComponent } from './pages/utilisateur/page-utilisateur/page-utilisateur.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { ApplicationGuardService } from './services/guard/application-guard.service';


const routes: Routes = [
    {
        path: 'login',
        component: PageLoginComponent
    },
    {
        path: 'inscrire',
        component: PageInscriptionComponent
    },
    {
        path: '',
        component: PageDashboardComponent,
        canActivate:[ApplicationGuardService],
        children: [
            {
                path: 'statistiques',
                component: PageStatistiquesComponent,
                canActivate:[ApplicationGuardService]
            },
            {
                path: 'articles',
                component: PageArticleComponent,
                canActivate:[ApplicationGuardService]
            },
            {
                path: 'nouvelarticle',
                component: NouvelArticleComponent,
                canActivate:[ApplicationGuardService]
            },
            {
                path: 'nouvelarticle/:idArticle',
                component: NouvelArticleComponent,
                canActivate:[ApplicationGuardService]
            },
            {
                path: 'nouveauclient',
                component: NouveauCltFrsComponent,
                canActivate:[ApplicationGuardService],
                data: {
                    origin: 'Customer'
                }
            },
            {
                path: 'nouveauclient/:idCltFrs',
                component: NouveauCltFrsComponent,
                canActivate:[ApplicationGuardService],
                data: {
                    origin: 'Customer'
                }
            },
            {
                path: 'nouveaufournisseur',
                component: NouveauCltFrsComponent,
                canActivate:[ApplicationGuardService],
                data: {
                    origin: 'Supplier'
                }
            },
            {
                path: 'nouveaufournisseur/:idCltFrs',
                component: NouveauCltFrsComponent,
                canActivate:[ApplicationGuardService],
                data: {
                    origin: 'Supplier'
                }
            },
            {
                path: 'mvtstk',
                component: PageMvtstkComponent,
                canActivate:[ApplicationGuardService]
            },
            {
                path: 'customers',
                component: PageClientComponent,
                canActivate:[ApplicationGuardService]
            },
            {
                path: 'suppliers',
                component: PageFournisseurComponent,
                canActivate:[ApplicationGuardService]
            },
            {
                path: 'commandesclient',
                component: PageCmdCltFrsComponent,
                canActivate:[ApplicationGuardService],
                data: {
                    origin: 'Customer'
                }
            },
            {
                path: 'commandesfournisseur',
                component: PageCmdCltFrsComponent,
                canActivate:[ApplicationGuardService],
                data: {
                    origin: 'Supplier'
                }
            },
            {
                path: 'nouvellecommandeclient',
                component: NouvelleCmdCltFrsComponent,
                canActivate:[ApplicationGuardService],
                data: {
                    origin: 'Customer'
                }
            },
            {
                path: 'nouvellecommandefournisseur',
                component: NouvelleCmdCltFrsComponent,
                canActivate:[ApplicationGuardService],
                data: {
                    origin: 'Supplier'
                }
            },
            {
                path: 'categories',
                component: PageCategoriesComponent,
                canActivate:[ApplicationGuardService]
            },
            {
                path: 'nouvellecategory',
                component: NouvelleCategoryComponent,
                canActivate:[ApplicationGuardService]
            },
            {
                path: 'nouvellecategory/:idCategory',
                component: NouvelleCategoryComponent,
                canActivate:[ApplicationGuardService]
            },
            {
                path: 'utilisateurs',
                component: PageUtilisateurComponent,
                canActivate:[ApplicationGuardService]
            },
            {
                path: 'nouvelutilisateur',
                component: NouvelUtilisateurComponent,
                canActivate:[ApplicationGuardService]
            },
            {
                path: 'profil',
                component: PageProfilComponent,
                canActivate:[ApplicationGuardService]
            },
            {
                path: 'changermotdepasse',
                component: ChangerMotDePasseComponent,
                canActivate:[ApplicationGuardService]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

// when you have a route than means you are calling a web component (it can contains many children)
// 1) we can manage route statically min1:13 :
// <button routerLink="/about" it will load the about component, then search <router-outlet in this page
// to display it
// 2) we can manage route dynamically also (we should make test if true so toward this route else toward second route) min1:15 :
// <button (click)="onAbout()" and in the class : 
//constructor(private router:Router){} onAbout(){ this.router.navigate(['about'])}; 

// connection to back-end min 1:18
// in the component : private host:string="http://localhost:8080"; constructor(private http:HttpClient){} 
// getTasks():Observable{ this.http.get(this.host + "/tasks")};
// when calling backend, the service receive imediately an Observable object that the service is subscribed to
// so he can do anything asynchronously while fetching real data from backend instead of waiting min1:20
// => this is reactive programming
// when calling this authService in other service, the ncalling that method : this.authService.getTasks().subscribe(...) min1:21
