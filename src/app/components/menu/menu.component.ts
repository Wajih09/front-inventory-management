import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  private lastSelectedMenu: Menu| undefined;

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  constructor(private router: Router) { }

  // navigate(url?: string): void {
  //   this.router.navigate([url]);
  // }

  //v28 https://www.youtube.com/watch?v=WkGLXU2IN6I&list=PL41m5U3u3wwlMzKk_zkhfEjz-pELG3Fxn&index=28
  navigate(menu: Menu): void {
    if (this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url]);
  }

  public menuProperties: Array<Menu> = [
    {
      id: '1',
      titre: 'Dashboard',
      icon: 'fas fa-chart-line',
      url: '',
      sousMenu: [
        {
          id: '11',
          titre: 'Overview',
          //titre: 'Vue d\'ensemble',
          icon: 'fas fa-chart-pie',
          url: ''
        },
        {
          id: '12',
          titre: 'Statistics',
          icon: 'fas fa-chart-bar',
          url: 'statistiques'
        }
      ]
    },
    {
      id: '2',
      titre: 'Items',
      icon: 'fas fa-boxes',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Items',
          icon: 'fas fa-boxes',
          url: 'articles'
        },
        {
          id: '22',
          titre: 'Stock movements',
          icon: 'fab fa-stack-overflow',
          url: 'mvtstk'
        }
      ]
    },
    {
      id: '3',
      titre: 'Customers',
      icon: 'fas fa-users',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Customers',
          icon: 'fas fa-users',
          url: 'customers'
        },
        {
          id: '32',
          titre: 'Customer orders',
          icon: 'fas fa-shopping-basket',
          url: 'commandesclient'
        }
      ]
    },
    {
      id: '4',
      titre: 'Suppliers',
      icon: 'fas fa-users',
      url: '',
      sousMenu: [
        {
          id: '41',
          titre: 'Suppliers',
          icon: 'fas fa-users',
          url: 'suppliers'
        },
        {
          id: '42',
          titre: 'Supplier orders',
          icon: 'fas fa-truck',
          url: 'commandesfournisseur'
        }
      ]
    },
    {
      id: '5',
      titre: 'Settings',
      icon: 'fas fa-cogs',
      url: '',
      sousMenu: [
        {
          id: '51',
          titre: 'Categories',
          icon: 'fas fa-tools',
          url: 'categories'
        },
        {
          id: '52',
          titre: 'Users',
          icon: 'fas fa-users-cog',
          url: 'utilisateurs'
        }
      ]
    }
  ]
}
