// https://www.youtube.com/watch?v=zT_nQ2oNeRM&list=PLxr551TUsmAo457BgKV4dTzF__SUS5knW&ab_channel=ProfesseurMohamedYOUSSFI
// strong point of angular is seperation of treatement (application or business logic) and logical presentation (web components) min1:06 not like React in same component you have ui and business logic
// so use of service allow to fulfill this aspect
// strong point of angular is data binding
// strong point of angular is dependency injection
import { Component } from '@angular/core';

//deocorator
@Component({

  // tag (balise) name to display the web component. 
  // There is 3 ways to write it app-root => <app-root></app-root> or [app-root] => <div app-root></div> or .app-root <div class="app-root"></div> min48
  selector: 'app-root',

  // to specify which is the html file for this component
  templateUrl: './app.component.html',

  // to spcify which is the style file used 
  styleUrl: './app.component.scss'
})

// the model
export class AppComponent {
  title = 'gestion-stock-front';
  // Class ==> HTML (Output Data)
  // - Property Binding [property] = "data"
  // - String interpolation (data is observable and HTML text is observer) min48 :
  // if for exemple here title ='app'; 
  // then call it in html <h1> welcome to {{title}}</h1> => data binding means creating link between
  // what is displayed and what is declared in the model min27
}

// Angular is based on reactive programming (asynchronous programming) so it uses library RxJS (used by all js frimeworks) which is based on observer design pattern min52
// exemple when sending request to backend it return Observable min1:19
// - there is a second model called imperative programming (synchronous or blocking programming) min50 : if vue wants to dispaly data from model
// he should inquire for it, but when this data change, the vue need to refresh and go ask again for this data

// Class <== HTML (Event binding) min55
// data binding in opposite way (button is observable and method is observer): Event binding or User event (click)="doSome()"

// Class <==> HTML (two way binding) min56
// <input [(ngModel)] = "data"> if data changes so input value changes and vice versa
// exemple of 3 types of data binding min58

// we choose a style (css) frimework boostrap or angular material to work with min1:03
// npm install --save bootstrap@3  
// npm will connect, download and install bootsrap and put it in nodes_modules package min1:03
// and the save here means save it (or declare it) in package.json min1:04
// without save ok it works but dependency is not declared in package.json but when pushing to git 
// and someone else clone it and perform npm i he will not be able to install the bootstrap dependecy
// because simply he will not find it in package.json min1:04

// - a service is a class that treates application or business logic (logique applicative in frensh) min1:06
// so use of service allow to fulfill this aspect
// - when injecting a service in the constructor of a component, angular will create an instance of that service
// and it will place it in a collection named @Injectable, so next time when injecting this service
// angular will not recreate a new instance but retrieve it from @Injectable collection min1:09
// => for share of treatement and informations between components we use services


