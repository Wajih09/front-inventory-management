// https://translate.google.com.tn/?hl=fr&tab=TT&sl=fr&tl=en&text=h%C3%A9ritage&op=translate
// angular allow to create single page application min1:11
import { NgModule } from '@angular/core';
import { BrowserModule/*, provideClientHydration*/ } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BoutonActionComponent } from './components/bouton-action/bouton-action.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { DetailMvtStkArticleComponent } from './components/detail-mvt-stk-article/detail-mvt-stk-article.component';
import { DetailMvtStkComponent } from './components/detail-mvt-stk/detail-mvt-stk.component';
import { DetailCltFrsComponent } from './components/detail-clt-frs/detail-clt-frs.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrsComponent } from './components/nouveau-clt-frs/nouveau-clt-frs.component';
import { DetailCmdCltFrsComponent } from './components/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { DetailCmdComponent } from './components/detail-cmd/detail-cmd.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './components/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageCategoriesComponent } from './pages/categories/page-categories/page-categories.component';
import { NouvelleCategoryComponent } from './pages/categories/nouvelle-category/nouvelle-category.component';
import { PageUtilisateurComponent } from './pages/utilisateur/page-utilisateur/page-utilisateur.component';
import { DetailUtilisateurComponent } from './components/detail-utilisateur/detail-utilisateur.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from './services/interceptor/http-interceptor.service';
import { LoaderComponent } from './components/loader/loader.component';

// contains AppModule class that uses decorator named @NgModule
// every web component will be declared in this module
// when creating with ng generate componenetName, it's declared automatically here min42
// stand alone component from Angular 14 = creating component without module associated like React min44
@NgModule({
  declarations: [
    AppComponent,
    PageDashboardComponent,
    PageInscriptionComponent,
    PageLoginComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    BoutonActionComponent,
    NouvelArticleComponent,
    PageMvtstkComponent,
    DetailMvtStkArticleComponent,
    DetailMvtStkComponent,
    DetailCltFrsComponent,
    PageClientComponent,
    PageFournisseurComponent,
    NouveauCltFrsComponent,
    DetailCmdCltFrsComponent,
    DetailCmdComponent,
    PageCmdCltFrsComponent,
    NouvelleCmdCltFrsComponent,
    PageCategoriesComponent,
    NouvelleCategoryComponent,
    PageUtilisateurComponent,
    DetailUtilisateurComponent,
    NouvelUtilisateurComponent,
    PageProfilComponent,
    ChangerMotDePasseComponent,
    LoaderComponent
  ],

  // import external modules for exemple http client module to communicate with backend
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  // to declare services min25
  providers: [
    //provideClientHydration()
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }  
  ],

  // first web component to load firstly
  bootstrap: [AppComponent]
})
export class AppModule { }

// angular application compound of multiple modules, the first loaded module is "appModule" 
// this module contains components, services, directives and pipes 
// - the first loaded component is Root component which is AppComponent min 32
// - component contains an other component (hierarchy of components) is called containerization and not heritage min34
// - use of service inside a web component is fulfilled via dependency injection min35
// - directives is a javascript function aims to impose a specification exemple required min37
// - pipes is a javascript function aims to format data min38
// - ng gernerate component (ng gc), service, directive but there is shortcut to generate all together min42
// - in the model (component.ts) class implements OnInit interface so we need to overrid ngOnInit()
// method which is triggered at the loading (instanciation) of the component used for initialization
// - Constructor is used only for dependency and not for initialization despite it's loaded before ngOnInit() min47

